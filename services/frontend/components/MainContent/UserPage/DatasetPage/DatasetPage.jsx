import { KaggleDatasetList } from './KaggleDatasetsList/KaggleDatasetList';
import KaggleDisplayDataset from './KaggleDisplayDataset/KaggleDisplayDataset';
import React, { useState, useEffect } from 'react';
import './DatasetPage.css';


function DatasetPage() {
    const [datasetName, setDatasetName] = useState("");
    const [datasetData, setDatasetData] = useState([]);
    const [clickedDataset, setClickedDataset] = useState(-1);
    const [datasetColumns, setDatasetColumns] = useState({ head: [] }); 

    function handleChange(event) {
        setDatasetName(event.target.value);
    }

    const handleClick = async () => {
        try {
            const data = await (await fetch(`http://0.0.0.0:8081/show_available_datasets?name=${datasetName}`)).json();
            setDatasetData(data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleDownloadDataset = async () => {
        try {
            const data = await (await fetch(`http://0.0.0.0:8081/show_dataframe?index=${clickedDataset}`)).json();
            setDatasetColumns(data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const mapKaggleData = datasetData.map((data, index) =>
        <tr className={"clickable-row ".concat(clickedDataset === index ? "selected" : "")} key={index}>
            <td onClick={() => setClickedDataset(index)}>{index}</td>
            <td onClick={() => setClickedDataset(index)}>{data.ref}</td>
            <td onClick={() => setClickedDataset(index)}>{data.subtitle}</td>
        </tr>
    );


      

    return (
        <>
            {datasetColumns.head.length === 0 ? (
                <KaggleDisplayDataset   
                    handleChange={handleChange} 
                    datasetName={datasetName} 
                    handleClick={handleClick} 
                    mapKaggleData={mapKaggleData} 
                    handleDownloadDataset={handleDownloadDataset}
                    datasetLength={datasetData.length}  />
            ) : (
                <KaggleDatasetList   datasetColumns={datasetColumns} />
            )}
        </>
    );
}

export default DatasetPage;
