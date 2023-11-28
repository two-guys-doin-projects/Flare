"""
This module defines parameter descriptors - your model's `describe_params` method should use them to document what parameter types and values are needed to create the model.

There are four types of parameters defined here:
- `IntRange` for integer values in certain range,
- `Text` for text,
- `Int` for integers with unlimited range,
- `ChooseOne` for values from a concrete list.
"""

from abc import ABC, abstractmethod
import jsons

class Descriptor(ABC):
    @abstractmethod
    def __init__(self):
        pass

class IntRange(Descriptor):
    def __init__(self, description: str, min: int, max: int):
        """
        Describes an integer range in which parameter's value has to be.
        Examples:
        - Dropout probability,
        - Amount of neural net layers
        """
        self.type = "ranged"
        self.description = description
        self.min = round(min),
        self.max = round(max)

class Text(Descriptor):
    def __init__(self, description: str):
        """
        Describes a text value.
        Examples:
        - Model name
        """
        self.type = "string"
        self.description = description

class Int(Descriptor):
    def __init__(self, description: str):
        """
        Describes a numeric value in integer format.
        Examples:
        - Amount of neurons in a layer
        """
        self.type = "int"
        self.description = description

class ChooseOne(Descriptor):
    def __init__(self, description: str, possible_values: list):
        """
        Describes a concrete list of values that a parameter can take.
        Examples:
        - model's backend architecture,
        - convolutional kernel size,
        - activation function used in neurons
        """
        self.description = description
        self.type = "choose_one"
        self.possible_values = possible_values
