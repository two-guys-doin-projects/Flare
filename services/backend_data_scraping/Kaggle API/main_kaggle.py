import json
import uvicorn
import pandas as pd
import init_kaggle
import search_datasets_kaggle
import download_dataset_kaggle
import requests
from fastapi import FastAPI, UploadFile


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
    datasets = downloaded_dataset.to_json(orient="records")
    parsed = json.loads(datasets)
    return {"Zbiór": parsed}


@app.get("/selected_columns_of_dataframe")
def selected_dataset(index: int):
    pass


@app.get("/send_dataset_to_ml")
def send_dataset_to_ml():
    pass


def list_of_datasets(name):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    dataset_name = name
    datasets = search_datasets_kaggle.show_datasets(
        kaggle_api, dataset_name
    )
    print(f"Lista zbiorów danych spod hasła {dataset_name}: \n {datasets}")
    return datasets


def download_dataset(index):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    # placeholder for dataset name
    datasets = list_of_datasets('air')
    print(datasets.dataset)
    downloaded_dataset = download_dataset_kaggle.download_dataset(kaggle_api, datasets, index)
    print(f"Pobierano: \n {downloaded_dataset}")
    return downloaded_dataset


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)




