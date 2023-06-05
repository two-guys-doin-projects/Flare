import torch.optim as optim
import modelManager as manager
import torch.nn as nn
import torch as T
from typing import List, Tuple

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
        self.optimizer = optim.Adam(self.model.parameters(), lr = 0.001)
        self.checkpoint = None
    def train(self, training_data: List[Tuple[T.tensor, T.tensor]], epochs: int = 2):
        self.model.train()
        for epoch in range(epochs):
            print(f"epoch {epoch}...")
            for sample in training_data:
                x, y = sample
                y_hat = self.model(x)
                self.loss = self.criterion(y_hat, y)
                self.optimizer.zero_grad()
                self.loss.backward()
                self.optimizer.step()
    def save(self):
        manager.saveModel(self.model_name, self.model)