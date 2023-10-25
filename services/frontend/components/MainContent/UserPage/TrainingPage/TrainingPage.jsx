import {KaggleDatasetList} from "../DatasetPage/KaggleDatasetsList/KaggleDatasetList"

function TrainingPage({datasetColumns}){
    return(
        <>
        <h1>Training</h1>
        {datasetColumns.head.length === 0 ? (
                <h1>Brak danych</h1>
            ) : (
                <KaggleDatasetList   datasetColumns={datasetColumns} />
            )}
        </>
    )
}

export default TrainingPage
