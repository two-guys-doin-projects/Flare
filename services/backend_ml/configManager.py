import json

def saveModel(name: str):
    raise NotImplementedError

def saveModelParams(name: str, architecture_parameter_dict: dict):
    with open(f"./usrModels/{name}.json", "+w") as param_file:
        param_file.write(json.stringify(architecture_parameter_dict))

def importModel(name: str):
    raise NotImplementedError

def importModelParams(name: str):
    raise NotImplementedError

def flushModelMemoryToFile(file_name: str, loaded_models: dict):
    raise NotImplementedError