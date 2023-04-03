from init_kaggle import kaggle_api_authentication
import pandas as pd
import io


def show_datasets(api, ds_name):
    ds_list = api.dataset_list(search=ds_name)
    df_list_of_datasets = pd.DataFrame(ds_list)
    df_list_of_files = api.dataset_list_files(df_list_of_datasets[0][1].ref)
    return df_list_of_datasets, df_list_of_files


def download_dataset(api, dataset):
    dataset = api.dataset_download_file(
            dataset=str(dataset),
            file_name=str(api.dataset_list_files(dataset.ref))
        )
    print(dataset)


if __name__ == "__main__":
    kaggle_api = kaggle_api_authentication()
    # place holder
    dataset_name = "air quality"
    list_of_datasets, list_of_files = show_datasets(kaggle_api, dataset_name)
    print(f"Lista zbiorów danych spod hasła {dataset_name}: \n {list_of_datasets[0][1]}")
    print(f"Lista możliwych plików do pobrania: {list_of_files.files}")
    download_dataset(kaggle_api, list_of_datasets[0][1])
