from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

#dev flags

DS_BACKEND_ADRESS = 'http://192.168.1.81:8081'

enforce_cors = True



#lifecycle logic

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting...")
    yield
    print("Saving all loaded models...")


app = FastAPI()

cors_origins = ["*"]

if enforce_cors:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

