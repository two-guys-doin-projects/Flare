from fastapi import FastAPI, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
from contextlib import asynccontextmanager
import modelManager as manager

#dev flags

enforce_cors = False

loaded_models = {}

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


@app.get("/ping")
def pong():
    return {"message": "pong!"}

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
        loaded_models[name] = createModel(name, type, params)
    except:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST)