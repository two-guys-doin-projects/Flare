import pandas as pd


def show_datasets(api, ds_name):
    """Pobranie informacji o dostępnych zbiorach danych

    Funkcja ma na celu wyświetlenie wszystkich dostępnych zbiorów danych
    spod danej szukanej nazwy.

    :param api: klucz API
    :param ds_name: nazwa szukanego zbioru danych
    :return: zwraca pd.DataFrame z nazwą oraz spisem datasetów
    """
    ds_list = api.dataset_list(search=ds_name)
    df_list_of_datasets = pd.DataFrame(ds_list)
    number_of_datasets = len(df_list_of_datasets)
    df_list_of_files = pd.DataFrame(
        check_if_dataset_is_available(api, number_of_datasets, df_list_of_datasets),
        columns=["dataset", "pliki"],
    )

    return df_list_of_datasets, df_list_of_files


def check_if_dataset_is_available(api, length, datasets_frame):
    """Sprawdzanie czy jest plik.

    Funkcja ma na celu sprawdzenie zawartości spod danej nazwy, czy zawiera
    dataset. Jeżeli zawiera dodaje ją do ramki danych.

    :param api: klucz API
    :param length: długość wszystkich zbiorów
    :param datasets_frame: ramka danych z zbiorami zawierającymi możliwe pliki do pobrania
    :return: ramkę danych z listą zbiorów oraz ich plikami
    """
    df_of_available_datasets = []
    for item in range(length):
        df_list_of_files = api.dataset_list_files(datasets_frame[0][item].ref)
        if "{}" in str(df_list_of_files.files):
            continue
        else:
            df_of_available_datasets.append(
                [datasets_frame[0][item], df_list_of_files.files[-1]]
            )

    return df_of_available_datasets
