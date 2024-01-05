import { useState, useEffect } from "react";
import DisplayTable from "../components/DisplayTable";
import { modelList } from "../api/MachineLearning";
import Loading from "../components/Loading";

export default function Models() {
    const [availableModels, setAvailableModels] = useState([]);
    const [clickedDataset, setClickedDataset] = useState(-1);
    const [searching, setSearching] = useState(true);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                console.log("Fetching models...");
                const models = await modelList();
                console.log("Models received:", models);
                setAvailableModels(models);
            } catch (error) {
                console.error("Error fetching models:", error);
            } finally {
                setSearching(false);
            }
        }
        fetchModels();
    }, []);

    return (
        <>
            <div className="max-w-screen-xl mx-auto pt-20">
                {searching ? <Loading /> : 
                    <DisplayTable 
                        headers={["Indeks", "Nazwa modelu", "Opis"]} 
                        items={availableModels} 
                        clickedDataset={clickedDataset} 
                        setClickedDataset={setClickedDataset}
                    /> 
                }
            </div>
        </>
    );
}
