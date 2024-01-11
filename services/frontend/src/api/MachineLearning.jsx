import API from "./MachineLearningAPI";

export const modelList = () => 
{
    return API.get('/model/list');
}

export const modelCreate = (modelName) => 
{
    return API.get(`/model/create?model_name=${modelName}`);
}


