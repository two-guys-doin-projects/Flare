from fastapi import FastAPI, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
from contextlib import asynccontextmanager
import modelManager as manager
import trainers
import dataConverter as dataconv
from typing import List
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
def trainModel(name: str, epochs: int, eval_column_indices: List[int]):
    dataset_request = requests.get(f"{DS_BACKEND_ADRESS}/send_dataset_to_ml")
    dataset = dataconv.convertToDataset(dataset_request.json(), eval_column_indices)
    model_trainers[name] = trainers.NeuralNetTrainer(name)
    try:
        model_trainers[name].train(training_data = dataset, epochs = epochs)
        return {'effect': 'success'}
    except:
        return {'effect': 'failure'}
    
@app.get("/model/prediction")
def getPrediction(name: str, data: List[float]):
    try:
        prediction = loaded_models[name](data)
    except:
        return {'result': 'error'}
    return {'result': Tensor.tolist(prediction)}