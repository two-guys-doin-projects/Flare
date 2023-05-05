import json
import os
import torch
import torch.nn as nn

def saveModel(name: str, model: nn.Module):
    """
    Zapisuje model na dysku.
    # Parametry

    - `name`: String - nazwa, pod jaką ma być zapisany model.
    - `model`: torch.nn.Module(lub klasy dziedziczące) - model do zapisu. Musi posiadać słownik parametrów jako atrybut `params`
    """
    path = f"./usrModels/{name}.pth"
    torch.save(model.state_dict(), path)
    if not os.path.exists(f"./usrModels/{name}.json"):
        saveModelParams(name, model.params)

def saveModelParams(name: str, architecture_parameter_dict: dict):
    with open(f"./usrModels/{name}.json", "+w") as param_file:
        param_file.write(json.dumps(architecture_parameter_dict))

#TODO how to handle recreating different types of models?

def importModel(name: str):
    path = f"./usrModels/{name}"
    if not os.path.exists(f"{path}.json"):
        return 0

#TODO test importing

def importModelParams(name: str) -> dict:
    """
    Zwraca słownik parametrów architektury wczytany z pliku konfiguracyjnego o podanej nazwie.
    """
    if not os.path.exists(f"./usrModels/{name}.json"):
        raise FileNotFoundError
    return json.load(f"./usrModels/{name}.json")

def flushModelMemoryToFile(file_name: str, loaded_models: dict):
    raise NotImplementedError

def  deleteModelFromDisk(name: str, truncate: bool = False):
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