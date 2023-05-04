import torch
import torch.nn as nn
import torch.nn.functional as func


class neuralNet(nn.Module):
    def __init__(self, input_size: int, hidden_size: int, num_layers: int, output_size: int):
        super().__init__()
        net = []
        net.append(nn.Linear(input_size, hidden_size))
        for layer in range(num_layers):
            net.append(nn.Linear(hidden_size, hidden_size))
        net.append(nn.Linear(hidden_size, output_size))
        net.append(nn.Softmax(dim=0))
        self.architechture = nn.Sequential(*net)
    def forward(self, x):
        y_hat = self.architechture(x)
        return y_hat