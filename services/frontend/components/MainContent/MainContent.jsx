import React from 'react';
import ModelPage from './UserPage/ModelPage/ModelPage';
import DatasetPage from './UserPage/DatasetPage/DatasetPage';
import TrainingPage from './UserPage/TrainingPage/TrainingPage';
import PredictionPage from './UserPage/PredictionPage/PredictionPage';
import './MainContent.css'

function MainContent({ selectedPage }) {
  return (
    <div className="main--content">
      {selectedPage === 'model' && <ModelPage />}
      {selectedPage === 'dataset' && <DatasetPage />}
      {selectedPage === 'training' && <TrainingPage />}
      {selectedPage === 'prediction' && <PredictionPage />}
    </div>
  );
}

export default MainContent;
