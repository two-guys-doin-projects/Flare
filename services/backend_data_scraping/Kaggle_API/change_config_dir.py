"""
Moduł zawiera zmianę lokalizacji pliku konfuguracyjnego kaggle.
Zamiast domyślnej scieżki `~/.local/bin` na naszą własną `./kaggle`
"""
import os

try:
    os.environ["KAGGLE_CONFIG_DIR"] = "./kaggle"
except NameError:
    print("Nie udało się znaleźć pliku konfiguracyjnego kaggle")
