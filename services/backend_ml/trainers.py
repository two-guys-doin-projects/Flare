import torch.optim as optim
import modelManager as manager
import torch.nn as nn

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
        self.model = manager.importModel(name)
        self.criterion = nn.CrossEntropyLoss()
        self.optimizer = optim.SGD(self.model.parameters(), lr = 0.001, momentum = 0.9)

