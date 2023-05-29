import torch.nn as nn


class neuralNet(nn.Module):
    def __init__(self, param_dict: dict):
        super().__init__()
        self.params = param_dict
        self.params['type'] = 'neural'
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