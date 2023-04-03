import os

try:
    os.environ['KAGGLE_CONFIG_DIR'] = './kaggle'
except NameError:
    print("Nie udało się znaleźć pliku konfiguracyjnego kaggle")
