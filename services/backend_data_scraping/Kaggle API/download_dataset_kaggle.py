import search_datasets_kaggle
import pandas as pd


def download_dataset(api, dataset):
    dataset = api.dataset_download_file(
        dataset=str(dataset), file_name=str(api.dataset_list_files(dataset.ref))
    )


if __name__ == "__main__":
    kaggle_api = search_datasets_kaggle.kaggle_api
    name_of_dataset = search_datasets_kaggle.check_if_dataset_is_available()
    download_dataset(kaggle_api, name_of_dataset)
    pass
