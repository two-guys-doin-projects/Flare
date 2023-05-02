import search_datasets_kaggle
import pandas as pd


def download_dataset(api, dataset):
    dataset_name = dataset.dataset[0]
    dataset_file = dataset.pliki[0]
    api.dataset_download_file(
        dataset=str(dataset_name), file_name=str(dataset_file)
    )

