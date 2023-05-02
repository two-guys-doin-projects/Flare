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
    for item in range(length):
        df_list_of_files = api.dataset_list_files(datasets_frame[0][item].ref)
        if "{}" in str(df_list_of_files.files):
            continue
        else:
            df_of_available_datasets.append(
                [datasets_frame[0][item], df_list_of_files.files[-1]]
            )

    return df_of_available_datasets



