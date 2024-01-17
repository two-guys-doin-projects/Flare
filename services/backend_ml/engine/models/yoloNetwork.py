from .pluginSchematics import base, descriptors

yolo_model_size = [
    "YOLOv8n", "YOLOv8s", "YOLOv8m", "YOLOv8l", "YOLOv8x"
]


class PluggableModel(base.BaseModel):

    def dictionary_name(self):
        return "YOLOv8"

    def create(self, hyperparameters):
        self.model_size = hyperparameters['model_size']
        self.image_size = hyperparameters['image_size']
        self.input_image = hyperparameters['input_image']

    def save(self):
        pass

    def load(self):
        pass

    def describe_params(self):
        return {
            'model_size': descriptors.ChooseOne("Wielkość modelu YOLO", yolo_model_size),
            'image_size': descriptors.Int("Wielkość obrazka wejściowego do modelu"),
        }

    def describe_train_data(self):
        pass

    def describe_inference_data(self):
        pass