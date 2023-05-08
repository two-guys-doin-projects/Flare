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


@app.get("/ping")
def ping():
    return {"message": downloaded_dataset}


@app.get("/get_dataset_name")
def get_dataset_name(name: str):
    return {"dataset_name": name}


@app.get("/show_dataset")
def show_dataset():
    datasets = list_of_datasets.to_json()
    return {"Lista zbiorów danych": datasets}


@app.get("/send_dataset")
def send_dataset():
    datasets = downloaded_dataset.to_json()
    return {"Lista zbiorów danych": datasets}


if __name__ == "__main__":
    kaggle_api = init_kaggle.kaggle_api_authentication()
    # place holder
    dataset_name = "air condition"
    list_of_datasets = search_datasets_kaggle.show_datasets(
        kaggle_api, dataset_name
    )
    print(f"Lista zbiorów danych spod hasła {dataset_name}: \n {list_of_datasets}")
    downloaded_dataset = download_dataset_kaggle.download_dataset(kaggle_api, list_of_datasets)
    print(f"Pobierano: {list_of_datasets.pliki[0]} \n {downloaded_dataset}")
    uvicorn.run(app, host="localhost", port=8000)




