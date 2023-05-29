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
    print(datasets.dataset)
    datasets_json = datasets.to_json(orient="records")
    parsed = json.loads(datasets_json)
    return {"Lista zbiorów danych": parsed}


@app.get("/show_dataframe")
def show_available_datasets(index: int):
    pass


@app.get("/selected_columns_of_dataframe")
def selected_dataset(index: int):
    pass

@app.get("/send_dataset_to_ml")
def send_dataset_to_ml():
    datasets = downloaded_dataset.to_json(orient="records")
    parsed = json.loads(datasets)
    return {"Zbiór": parsed}


def list_of_datasets(name):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    dataset_name = name
    datasets = search_datasets_kaggle.show_datasets(
        kaggle_api, dataset_name
    )
    print(f"Lista zbiorów danych spod hasła {dataset_name}: \n {datasets}")
    return datasets


def download_dataset():
    kaggle_api = init_kaggle.kaggle_api_authentication()
    downloaded_dataset = download_dataset_kaggle.download_dataset(kaggle_api, list_of_datasets)
    print(f"Pobierano: {downloaded_dataset}")
    return downloaded_dataset


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)




