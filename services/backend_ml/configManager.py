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
        param_file.write(json.dumps(architecture_parameter_dict))

#TODO how to handle recreating different types of models?

def importModel(name: str):
    path = f"./usrModels/{name}"
    if not os.path.exists(f"{path}.json"):
        return 0

#TODO test importing

def importModelParams(name: str):
    if not os.path.exists(f"./usrModels/{name}.json"):
        raise FileNotFoundError
    return json.load(f"./usrModels/{name}.json")

def flushModelMemoryToFile(file_name: str, loaded_models: dict):
    raise NotImplementedError

def  deleteModel(name: str, truncate: bool = False):
    os.remove(f"./usrModels/{name}.pth")
    if truncate:
        os.remove(f"./usrModels/{name}.json")