import baseModels as models
import torch

# TODO utilize model manager to import models

class NeuralNetTrainer():
    def __init__(self, model_path: str, param_dict: dict):
        self.model = models.neuralNet(param_dict)
        self.model.load_state_dict(torch.load(model_path))