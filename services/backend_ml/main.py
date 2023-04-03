from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from contextlib import asynccontextmanager

#dev flags

enforce_cors = False

model_storage = {}


#lifecycle logic

@asynccontextmanager
async def lifespan(app: FastAPI):
    with open("models.yaml", "rw") as model_cfg_file:
        print("Model file loaded.")
    
    yield



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
