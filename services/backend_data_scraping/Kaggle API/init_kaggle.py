import change_config_dir
from kaggle.api.kaggle_api_extended import KaggleApi


def kaggle_api_authentication():
    """
    Funkcja służąca do autentykacji połączenia z kaggle.com

    :return: zwraca klucz do API
    """
    try:
        api = KaggleApi()
        api.authenticate()
        api.print_config_values(prefix="-")
        return api
    except NameError:
        return print("Nie udało się połączyć z API Kaggle")
