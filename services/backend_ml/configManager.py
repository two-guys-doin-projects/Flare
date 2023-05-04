import json
import os
import torch

def saveModel(name: str, model):
    path = f"./usrModels/{name}.pth"
    torch.save(model.state_dict(), path)
    if not os.path.exists(f"./usrModels/{name}.json"):
        saveModelParams(name, model.params)

def saveModelParams(name: str, architecture_parameter_dict: dict):
    with open(f"./usrModels/{name}.json", "+w") as param_file:
        param_file.write(json.stringify(architecture_parameter_dict))

def importModel(name: str):
    raise NotImplementedError

def importModelParams(name: str):
    raise NotImplementedError

def flushModelMemoryToFile(file_name: str, loaded_models: dict):
    raise NotImplementedError

def  deleteModel(name: str, truncate: bool = False):
    os.remove(f"./usrModels/{name}.pth")
    if truncate:
        os.remove(f"./usrModels/{name}.json")