import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Models from "./views/Models";
import Dataset from "./views/Dataset";
import Train from "./views/Train";
import Prediction from "./views/Prediction";
import Footer from "./components/Footer";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/train" element={<Train />} />
            <Route path="/predict" element={<Prediction />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}