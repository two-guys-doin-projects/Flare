from init_kaggle import kaggle_api_authentication
import pandas as pd


def show_datasets(api, ds_name):
    ds_list = api.dataset_list(search=ds_name)
    df_list_of_datasets = pd.DataFrame(ds_list)
    number_of_datasets = len(df_list_of_datasets)
    df_list_of_files = pd.DataFrame(
        check_if_dataset_is_available(api, number_of_datasets, df_list_of_datasets),
        columns=["dataset", "pliki"],
    )

    return df_list_of_datasets, df_list_of_files


def check_if_dataset_is_available(api, length, datasets_frame):
    df_of_available_datasets = []
    df_of_available_datasets_files = []
    for item in range(length):
        df_list_of_files = api.dataset_list_files(datasets_frame[0][item].ref)
        if "{}" in str(df_list_of_files.files):
            continue
        else:
            df_of_available_datasets.append(
                [datasets_frame[0][item], df_list_of_files.files]
            )

    return df_of_available_datasets


def download_dataset(api, dataset):
    dataset = api.dataset_download_file(
        dataset=str(dataset), file_name=str(api.dataset_list_files(dataset.ref))
    )


if __name__ == "__main__":
    kaggle_api = kaggle_api_authentication()
    # place holder
    dataset_name = "air quality"
    list_of_datasets, list_of_files = show_datasets(kaggle_api, dataset_name)
    print(f"Lista zbiorów danych spod hasła {dataset_name}: \n {list_of_datasets}")
    print(f"Lista możliwych plików do pobrania: \n {list_of_files}")
    # download_dataset(kaggle_api, list_of_datasets[0][1])
