import API from "./MachineLearningAPI";

export const modelList = () => 
{
    return API.get('/model/list');
}

