import json
from torch import FloatTensor
from typing import List

def convertToDataset(data: str, eval_column_indices: List[int]):
    #dict_data: dict = json.loads(data)
    dataset = []
    columns = list(data['train'][0].keys())
    train_columns = []
    eval_columns = []
    for column_index in range(len(columns)):
        (eval_columns.append(columns[column_index]) 
            if column_index in eval_column_indices 
            else train_columns.append(columns[column_index]))
    for row in data['train']:
        inputs = [float(row[column]) for column in train_columns]
        outputs = [float(row[column]) for column in eval_columns]
        dataset.append((FloatTensor(inputs), FloatTensor(outputs)))
    return dataset
