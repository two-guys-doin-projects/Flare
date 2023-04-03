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


