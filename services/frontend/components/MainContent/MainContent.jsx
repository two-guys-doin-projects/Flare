import React , {useState} from 'react';
import ModelPage from './UserPage/ModelPage/ModelPage';
import DatasetPage from './UserPage/DatasetPage/DatasetPage';
import TrainingPage from './UserPage/TrainingPage/TrainingPage';
import PredictionPage from './UserPage/PredictionPage/PredictionPage';
import HomePage from './HomePage/HomePage'
import './MainContent.css'

function MainContent({ selectedPage }) {
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
    <div className="main--content">
      {selectedPage === 'home' && <HomePage />}
      {selectedPage === 'model' && <ModelPage />}
      {selectedPage === 'dataset' && <DatasetPage 
        datasetName={datasetName}
        datasetData={datasetData}
        clickedDataset={clickedDataset}
        datasetColumns={datasetColumns}
        handleChange={handleChange}
        handleClick={handleClick}
        handleDownloadDataset={handleDownloadDataset}
        mapKaggleData={mapKaggleData}
        />}
      {selectedPage === 'training' && <TrainingPage datasetColumns={datasetColumns}/>}
      {selectedPage === 'prediction' && <PredictionPage />}
    </div>
  );
}

export default MainContent;
