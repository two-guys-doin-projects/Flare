import torch
import torch.nn as nn
import torch.nn.functional as func


class neuralNet(nn.Module):
    def __init__(self, param_dict: dict):
        super().__init__()
        net = []
        net.append(nn.Linear(param_dict['input_size'], param_dict['hidden_size']))
        for layer in range(param_dict['num_layers']):
            net.append(nn.Linear(param_dict['hidden_size'], param_dict['hidden_size']))
        net.append(nn.Linear(param_dict['hidden_size'], param_dict['output_size']))
        net.append(nn.Softmax(dim=0))
        self.architechture = nn.Sequential(*net)
    def forward(self, x):
        y_hat = self.architechture(x)
        return y_hat