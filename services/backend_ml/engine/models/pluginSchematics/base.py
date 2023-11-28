"""
This module contains a definition for:
- Base pluggable model - your plugin's model should inherit from this class,
- Model data object that defines saveable model state.
"""

from abc import ABCMeta, abstractmethod, abstractproperty
from typing import TypedDict
from jsons import dump as json_export
from descriptors import Descriptor
from typing import Dict


class ModelData(TypedDict):
    modelName: str
    params: dict
    checkpoint: any

class BaseModel(metaclass = ABCMeta):

    @abstractproperty
    def dictionary_name(self) -> str:
        """
        Name, to which the model will be associated with in API endpoints.
        """
        pass

    @abstractmethod
    def create(self):
        """
        A method for creating the model from scratch.
        """
        pass

    @abstractmethod
    def save(self) -> ModelData:
        """
        A method that returns data from which it can be loaded later.
        """
        pass

    @abstractmethod
    def load(self, model_state: ModelData):
        """
        A method that loads data from the saved state.
        """
        pass

    @abstractmethod
    def describe_params(self) -> Dict[str, Descriptor]:
        """
        A method for describing the parameters required for creating the model. Use `Descriptor`s defined in `descriptors` module.

        The expected return value is a dictionary, where keys are parameter names and their values are `Descriptor`s.
        """

    def get_param_object(self):
        return json_export(self.describe_params())