from importlib import import_module
from .models import modules

def get_pluggable_model_modules():
    """
    Imports pluggable models.
    """
    module_names = [module_path.split('\\')[-1].split('.')[0] for module_path in modules]
    return [
        import_module(".models." + module_name, package='engine') for module_name in module_names if module_name != "__init__"
    ]

def get_pluggable_models():
    """
    Returns a list of models with defined names.
    """
    return {
        module.PluggableModel().dictionary_name() : module for module in get_pluggable_model_modules()
    }

if __name__ == "__main__":
    models = get_pluggable_models()
    print("done")