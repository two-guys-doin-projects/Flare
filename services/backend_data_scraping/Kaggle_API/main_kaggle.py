import json
import uvicorn
import pandas as pd
import math
import init_kaggle
import search_datasets_kaggle
import download_dataset_kaggle
from typing_extensions import Annotated
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

data_scraping_storage = {
    'user_id': '',
    'dataset_name': '',
    'downloaded_dataset': '',
    'dataset_columns': []
}

app = FastAPI()

cors_origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/show_available_datasets")
def show_available_datasets(name: str):
    datasets = list_of_datasets(name)
    datasets_json = datasets.to_json(orient="records")
    parsed = json.loads(datasets_json)
    new_list_ref = [dic['dataset']['ref'] for dic in parsed]
    new_list_subtitle = [dic['dataset']['subtitle'] for dic in parsed]
    return [{'ref': new_list_ref[i], 'subtitle': new_list_subtitle[i]} for i in range(len(new_list_ref))]


@app.get("/show_dataframe")
def show_available_datasets(index: int):
    downloaded_dataset = download_dataset(index)
    datasets = downloaded_dataset.head(25)
    datasets = datasets.to_json(orient="records")
    parsed = json.loads(datasets)
    return {"head": parsed}


@app.get("/selected_columns_of_dataframe")
def selected_columns_of_dataframe(index: Annotated[str, Query(min_length=1)]):
    data_scraping_storage['dataset_columns'] = [int(g) for g in index.split(',')]
    return {'kolumny: ': index}


@app.get("/send_dataset_to_ml")
def send_dataset_to_ml():
    dataset_training, dataset_test = cut_dataset(data_scraping_storage['dataset_columns'])
    dataset_training = dataset_training.to_json(orient="records")
    dataset_test = dataset_test.to_json(orient="records")
    parsed_training = json.loads(dataset_training)
    parsed_test = json.loads(dataset_test)
    return {"train": parsed_training,
            "validate": parsed_test}


def list_of_datasets(name):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    data_scraping_storage['dataset_name'] = name
    print('cos: ', data_scraping_storage['dataset_name'])
    datasets = search_datasets_kaggle.show_datasets(
        kaggle_api, data_scraping_storage['dataset_name']
    )
    return datasets


def download_dataset(index):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    datasets = list_of_datasets(data_scraping_storage['dataset_name'])
    print(datasets)
    data_scraping_storage['downloaded_dataset'] = download_dataset_kaggle.download_dataset(kaggle_api, datasets, index)
    return data_scraping_storage['downloaded_dataset']


def cut_dataset(index: list):
    size = len(data_scraping_storage['downloaded_dataset'])
    print(f"rozmiar to: {size}")
    df = pd.DataFrame(data_scraping_storage['downloaded_dataset'])
    df_after_cut = df.drop(df.columns[index], axis=1).dropna()
    dataset_training = df_after_cut.iloc[math.floor(size/4):, :]
    dataset_test = df_after_cut.iloc[:math.floor(size/4), :]
    print(f"rozmiar to: {len(dataset_training)}")
    print(f"rozmiar to: {len(dataset_test)}")
    return dataset_training, dataset_test


@app.get("/storage")
def check_storage():
    return data_scraping_storage


