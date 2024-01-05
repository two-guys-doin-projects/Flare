import React, { useState, useEffect } from "react";
import { showAvailableDatasets, showDataframe } from "../api/DataScraping";
import DatasetSearchList from "../components/DatasetSearchList";

export default function Dataset() {
    const [availableDatasets, setAvailableDatasets] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searching, setSearching] = useState(false);
    const [clickedDataset, setClickedDataset] = useState(-1);
    const [downloadedDatasets, setDownloadedDatasets] = useState([]);
    const [downloadedColumnsName, setDownloadedColumnsName] = useState([])


    const handleSubmitSearch = async (event) => {
        event.preventDefault();
        try {
            setSearching(true);
            console.log("start!!! dataset name is: ", searchName);
            const datasets = await showAvailableDatasets(searchName);
            setAvailableDatasets(datasets);
        } catch (error) {
            console.error("Error fetching datasets:", error);
        } finally {
            setSearching(false);
        }
    };

    const handleSubmitDownload = async (event) => {
        event.preventDefault();
        try {
            setSearching(true);
            console.log("start!!! downlaod dataset on index: ", clickedDataset);
            const datasets = await showDataframe(clickedDataset);
            const mapKaggleColumnsName = datasets.data.head;
            const columnsName = Object.keys(mapKaggleColumnsName[0])[0].split(';');
            const dataColumnData = mapKaggleColumnsName.map((item) => Object.values(item));
            setDownloadedColumnsName(columnsName);
            setDownloadedDatasets(dataColumnData);
            console.log("finish!!! downlaod data is: ", datasets.data.head);
            console.log("finish!!! downlaod data is: ", columnsName);
            console.log("finish!!! downlaod data is: ", dataColumnData);
        } catch (error) {
            console.error("Error fetching datasets:", error);
        } finally {
            setSearching(false);
        }
    };

    return (
        <>
            <DatasetSearchList
                handleSubmit={handleSubmitSearch}
                searching={searching}
                searchName={searchName}
                setSearchName={setSearchName}
                availableDatasets={availableDatasets}
                clickedDataset={clickedDataset}
                setClickedDataset={setClickedDataset}
                handleSubmitDownload={handleSubmitDownload}
                downloadedColumnsName={downloadedColumnsName}
                downloadedDatasets={downloadedDatasets}
            />
        </>
    );
}
