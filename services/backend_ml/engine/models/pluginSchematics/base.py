from abc import ABCMeta, abstractmethod, abstractproperty
from typing import TypedDict
from jsons import dump as json_export


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
    def describe_params(self):
        """
        A method for describing the parameters required for creating the model.
        """

    def get_param_object(self):
        return json_export(self.describe_params())