import change_config_dir
from kaggle.api.kaggle_api_extended import KaggleApi


def kaggle_api_authentication():
    try:
        api = KaggleApi()
        api.authenticate()
        api.print_config_values(prefix="-")
        return api
    except NameError:
        return print("Nie udało się połączyć z API Kaggle")


def download_data(api):
    covid_ds = api.dataset_list(search='covid')
    print(covid_ds[0])
    api.dataset_view(covid_ds[0])
    covid_ds[0].tags


if __name__ == "__main__":
    kaggle_api = kaggle_api_authentication()
    download_data(kaggle_api)
