import json
import uvicorn
import init_kaggle
import search_datasets_kaggle
import download_dataset_kaggle
from typing_extensions import Annotated
from fastapi import FastAPI, Query

data_scraping_storage = {
    'dataset_name': '',
    'downloaded_dataset': '',
    'dataset_columns': []
}

dataset_name = ''
downloaded_dataset = ''

app = FastAPI()


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
    return {"Zbiór": parsed}


@app.get("/selected_columns_of_dataframe")
def selected_dataset(index: Annotated[str, Query(min_length=1)]):
    print(index)
    data_scraping_storage['dataset_columns'] = [int(g) for g in index.split(',')]
    print(data_scraping_storage['dataset_columns'])
    return {'kolumny: ': index}


@app.get("/send_dataset_to_ml")
def send_dataset_to_ml():
    dataset_training = None
    dataset_test = None
    return None


def list_of_datasets(name):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    data_scraping_storage['datasetname'] = name
    datasets = search_datasets_kaggle.show_datasets(
        kaggle_api, data_scraping_storage['datasetname']
    )
    return datasets


def download_dataset(index):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    datasets = list_of_datasets(data_scraping_storage['dataset_name'])
    data_scraping_storage['downloaded_dataset'] = download_dataset_kaggle.download_dataset(kaggle_api, datasets, index)
    return data_scraping_storage['downloaded_dataset']


def cut_dataset(index: list):
    pass


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)




