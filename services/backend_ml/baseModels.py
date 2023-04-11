import torch
import torch.nn as nn


class neuralNet(nn.Module):
    def __init__(self, input_size: int, num_layers: int, output_size: int):
        super().__init__()
        #TODO finish neural network init