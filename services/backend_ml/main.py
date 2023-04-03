from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

#dev flags

enforce_cors = False




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
