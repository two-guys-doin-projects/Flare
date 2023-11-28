from abc import ABC, abstractmethod
import jsons

class Descriptor(ABC):
    @abstractmethod
    def __init__(self):
        pass

class IntRange(Descriptor):
    def __init__(self, description: str, min: int, max: int):
        self.type = "ranged"
        self.description = description
        self.min = round(min),
        self.max = round(max)

class Text(Descriptor):
    def __init__(self, description: str):
        self.type = "string"
        self.description = description

class Int(Descriptor):
    def __init__(self, description: str):
        self.type = "int"
        self.description = description

class ChooseOne(Descriptor):
    def __init__(self, description: str, possible_values: list):
        self.type = "choose_one"
        self.possible_values = possible_values
