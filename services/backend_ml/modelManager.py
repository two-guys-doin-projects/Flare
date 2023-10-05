import json
import os
import torch
import torch.nn as nn
import baseModels as models
from typing import List, Tuple

def saveModel(name: str, model: nn.Module):
    """
    Zapisuje model na dysku.
    # Parametry

    - `name`: String - nazwa, pod jaką ma być zapisany model.
    - `model`: torch.nn.Module(lub klasy dziedziczące) - model do zapisu. Musi posiadać słownik parametrów jako atrybut `params`.
    """
    path = f"./usrModels/{name}.pth"
    torch.save(model.state_dict(), path)
    if not os.path.exists(f"./usrModels/{name}.json"):
        saveModelParams(name, model.params)

def saveModelParams(name: str, architecture_parameter_dict: dict):
    with open(f"./usrModels/{name}.json", "+w") as param_file:
        param_file.write(json.dumps(architecture_parameter_dict))

def importModel(name: str):
    """ Importuje model o podanej nazwie i zwraca go jako wynik. """
    path = f"./usrModels/{name}"
    if not os.path.exists(f"{path}.json"):
        return FileNotFoundError
    params = importModelParams(name)
    if params['type'] =='neural':
        model = models.neuralNet(params)
    else:
        raise TypeError("Nie znaleziono typu architektury podanego w pliku konfiguracyjnym.")
    if os.path.exists(f"{path}.pth"):
        model.load_state_dict(torch.load(f"{path}.pth"))
    return model

def importModelParams(name: str) -> dict:
    """
    Zwraca słownik parametrów architektury wczytany z pliku konfiguracyjnego o podanej nazwie.
    """
    if not os.path.exists(f"./usrModels/{name}.json"):
        raise FileNotFoundError
    with open(f"./usrModels/{name}.json") as param_file:
        return json.load(param_file)

def flushModelMemoryToFile(loaded_models: dict):
    """Zapisuje wszystkie modele załadowane do słownika."""
    for model_name in loaded_models:
        saveModel(model_name, loaded_models[model_name])

def deleteModelFromDisk(name: str, truncate: bool = False):
    """
    Usuwa model z dysku. Nie ingeruje w załadowane modele.
    # Parametry
    - `name`: String - nazwa modelu.
    - `truncate`: bool - ustawienie na `True` spowoduje, że poza usunięciem parametrów modelu

    usunięta zostanie także konfiguracja architektury.
    """
    os.remove(f"./usrModels/{name}.pth")
    if truncate:
        os.remove(f"./usrModels/{name}.json")

def createModel(name: str, type: str, params: dict):
    if name == "":
        return TypeError("brak nazwy")
    params['type'] = type
    saveModelParams(name, params)
    return importModel(name)


def listAvailableModels(model_dict: dict, saved_models_path: str = "") -> List[str]:
    """
    Zwraca listę dostępnych modeli.
    # Parametry
    - `model_dict`: słownik modeli załadowanych do pamięci.
    - `saved_models_path`: ścieżka do katalogu z zapisanymi modelami. Niewymagana.
    """
    loaded_models = list(model_dict.keys())
    if not saved_models_path or not os.path.isdir(saved_models_path):
        return []
    saved_models = os.listdir(saved_models_path)
    saved_models = list(map(trimExtension, saved_models))
    #https://www.digitalocean.com/community/tutorials/get-unique-values-from-a-list-in-python#1-python-set-to-get-unique-values-from-a-list
    all_models = list(set(loaded_models + saved_models))
    return all_models

def trimExtension(file_name: str) -> str:
    return file_name.split('.')[0]

def retrieveModelType(model: nn.Module) -> str:
    return model.params['type']

def getIOShape(model_name: str) -> Tuple[int]:
    """
    Zwraca kształt wejścia i wyjścia modelu

    w postaci krotki, której pierwsza wartość to ilośc wejść

    a druga to ilość wyjść.
    """
    model_parameters = importModelParams(model_name)
    return [model_parameters['input_size'], model_parameters['output_size']]