import baseModels as models
import torch

class NeuralNetTrainer():
    def __init__(self, model_path: str, input_size: int, hidden_size: int, num_layers: int, output_size: int):
        self.model = models.neuralNet(input_size, hidden_size, num_layers, output_size)
        self.model.load_state_dict(torch.load(model_path))