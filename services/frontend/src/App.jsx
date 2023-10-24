import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import MainContent from '../components/MainContent/MainContent';
import Footer from "../components/Footer/Footer";
import ModelPage from "../components/MainContent/UserPage/ModelPage/ModelPage";
import DatasetPage from "../components/MainContent/UserPage/DatasetPage/DatasetPage";
import TrainingPage from "../components/MainContent/UserPage/TrainingPage/TrainingPage";
import PredictionPage from "../components/MainContent/UserPage/PredictionPage/PredictionPage";
import UserPage from "../components/MainContent/UserPage/UserPage";
import HomePage from "../components/MainContent/HomePage/HomePage"
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/user" element={<UserPage />}>
            <Route path="home" element={<HomePage />} />
            <Route path="model" element={<ModelPage />} />
            <Route path="dataset" element={<DatasetPage />} />
            <Route path="training" element={<TrainingPage />} />
            <Route path="prediction" element={<PredictionPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
