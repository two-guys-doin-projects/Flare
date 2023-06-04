import torch.optim as optim
import modelManager as manager
import torch.nn as nn
import torch as T
from typing import List

# TODO implement trainer
# in the most basic state it should just:
# train the network, 
# save the result model state dict
# and give an option to save it to the model's file in ./usrModels/
# if you're feeling fancy, make it:
# do the above, but
# make it save a checkpoint every epoch(or idk last three)
# generate an accuracy report for every checkpoint available under an API endpoint
# and give an option to save a chosen chekpoint to the model's file

class NeuralNetTrainer():
    def __init__(self, name: str):
        self.model_name = name
        self.model = manager.importModel(name)
        self.criterion = nn.CrossEntropyLoss()
        self.optimizer = optim.SGD(self.model.parameters(), lr = 0.001, momentum = 0.9)
    def train(self, training_data: List[T.tensor, T.tensor], epochs: int = 2):
        for epoch in range(epochs):
            for sample in training_data:
                x, y = sample
                self.optimizer.zero_grad()
                y_hat = self.model(x)
                self.loss = self.criterion(y_hat, y)
                self.loss.backward()
                self.optimizer.step()
    def save(self):
        manager.saveModel(self.model_name, self.model)