import json
import uvicorn
import init_kaggle
import search_datasets_kaggle
import download_dataset_kaggle
from typing_extensions import Annotated
from fastapi import FastAPI, Query

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
    number_of_columns = [int(g) for g in index.split(',')]
    print(type(number_of_columns))
    return {'kolumny: ': index}


@app.get("/send_dataset_to_ml")
def send_dataset_to_ml():
    pass


def list_of_datasets(name):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    dataset_name = name
    datasets = search_datasets_kaggle.show_datasets(
        kaggle_api, dataset_name
    )
    return datasets


def download_dataset(index):
    kaggle_api = init_kaggle.kaggle_api_authentication()
    datasets = list_of_datasets(dataset_name)
    downloaded_dataset = download_dataset_kaggle.download_dataset(kaggle_api, datasets, index)
    return downloaded_dataset


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)




