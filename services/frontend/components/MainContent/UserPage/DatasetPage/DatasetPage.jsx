import { KaggleDatasetList } from './KaggleDatasetsList/KaggleDatasetList';
import KaggleDisplayDataset from './KaggleDisplayDataset/KaggleDisplayDataset';
import React, { useState, useEffect } from 'react';
import './DatasetPage.css';


function DatasetPage({datasetName, datasetData, datasetColumns, handleChange, handleClick, handleDownloadDataset, mapKaggleData}) {
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
