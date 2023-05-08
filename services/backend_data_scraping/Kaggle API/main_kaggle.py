import uvicorn
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
    return {"message": "kozła!"}


if __name__ == "__main__":
    kaggle_api = init_kaggle.kaggle_api_authentication()
    # place holder
    dataset_name = "air condition"
    list_of_datasets, list_of_files = search_datasets_kaggle.show_datasets(
        kaggle_api, dataset_name
    )
    print(f"Lista zbiorów danych spod hasła {dataset_name}: \n {list_of_files}")
    downloaded_dataset = download_dataset_kaggle.download_dataset(kaggle_api, list_of_files)
    print(f"Pobierano: {list_of_files.pliki[0]} \n {downloaded_dataset}")
    uvicorn.run(app, host="localhost", port=8000)
    #requests.post("localhost:8000/receive_df", data=downloaded_dataset.all)

