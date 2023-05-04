import baseModels as models
import torch

class NeuralNetTrainer():
    def __init__(self, model_path: str, param_dict: dict):
        self.model = models.neuralNet(param_dict)
        self.model.load_state_dict(torch.load(model_path))