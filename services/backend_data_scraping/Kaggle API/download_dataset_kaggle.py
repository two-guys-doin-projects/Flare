import search_datasets_kaggle
import pandas as pd
import os


def download_dataset(api, dataset, index):
    """Funkcja pobierająca dany dataset

    Funkcja ma na celu pobranie wybranego przez użytkownika zbiodu danych, zapisanie go
    oraz otwarcie go w python'ie.

    :param api: klucz API kaggle
    :param dataset: wybrany dataset
    :return: zwraca dataframe z wybranymi danymi
    """
    dataset_name = dataset.dataset[index]
    dataset_file = dataset.pliki[index]
    api.dataset_download_file(
        dataset=str(dataset_name),
        file_name=str(dataset_file),
        path="./kaggle_downloaded_files",
    )

    os.rename('./kaggle_downloaded_files/'+str(dataset_file), './kaggle_downloaded_files/dataset.csv')
    pd.options.display.max_rows = 10
    data = pd.read_csv('./kaggle_downloaded_files/dataset.csv', engine='python')
    return data
