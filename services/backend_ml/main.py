from fastapi import FastAPI, status, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import requests
from contextlib import asynccontextmanager
import modelManager as manager
import trainers
import dataConverter as dataconv
from typing import List, Annotated
import requests
from torch import Tensor

#dev flags

DS_BACKEND_ADRESS = 'http://localhost:8081'

enforce_cors = False

loaded_models = {}
model_trainers = {}

model_save_path = 'usrModels/'


#lifecycle logic

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting...")
    yield
    print("Saving all loaded models...")
    manager.flushModelMemoryToFile(loaded_models)


app = FastAPI()

cors_origins = ["http://localhost", "http://localhost:8000"]

if enforce_cors:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


@app.get("/models/list")
def getModelList():
    return(manager.listAvailableModels(loaded_models, model_save_path))

@app.post("/model/select", status_code=status.HTTP_200_OK)
def ensureModelIsLoaded(model_name: str):
    try:
        loaded_models[model_name] = manager.importModel(model_name)
    except FileNotFoundError:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

@app.post("/model/create")
def createModel(name: str, type: str, params: dict):
    try:
        loaded_models[name] = manager.createModel(name, type, params)
    except TypeError:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)
    
@app.post("/model/train")
def trainModel(name: str, epochs: int, eval_column_indices: Annotated[List[int], Query()]):
    dataset_request = requests.get(f"{DS_BACKEND_ADRESS}/send_dataset_to_ml")
    dataset = dataconv.convertToDataset(dataset_request.json(), eval_column_indices)
    model_trainers[name] = trainers.NeuralNetTrainer(name)
    try:
        model_trainers[name].train(training_data = dataset, epochs = epochs)
        model_trainers[name].save()
        return {'effect': 'success'}
    except:
        return {'effect': 'failure'}
    
@app.get("/model/prediction")
def getPrediction(name: str, data: Annotated[List[float], Query()]):
    try:
        prediction = loaded_models[name](Tensor(data))
    except Exception as error:
        return {'result': repr(error)}
    return {'result': Tensor.tolist(prediction)}

@app.get("/model/io_shape")
def get_model_shape(name:str):
    try:
        return manager.getIOShape(name)
    except:
        raise HTTPException("Nie znaleziono modelu")