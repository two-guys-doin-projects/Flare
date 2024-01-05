import API from "./DataScrapingAPI";

export const showAvailableDatasets = (name) => 
{
    return API.get(`/show_available_datasets?name=${name}`);
}

export const showDataframe = (index) =>
{
    return API.get(`show_dataframe?index=${index}`)
}

export const selectedColumnsOfDataframe = (index) =>
{
    API.get(`/selected_columns_of_dataframe?index=${index}`)
}

export const sendDatasetToML = (index) =>
{
    API.get('/send_dataset_to_ml')
}