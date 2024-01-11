import { useState, useEffect } from "react";
import { modelList } from "../api/MachineLearning";
import Loading from "../components/Loading";
import NewModelTab from "../components/NewModelTabs";
import { useSelector, useDispatch } from "react-redux";
import { newmodels } from '../state/ModelListSlice'
import DisplayTableModels from "../components/DisplayTableModels";

export default function Models() {
    const [clickedDataset, setClickedDataset] = useState(-1);
    const [searching, setSearching] = useState(true);
    const models = useSelector((state) => state.models);
    const displatch = useDispatch();

    useEffect(() => {
        const fetchModels = async () => {
            try {
                console.log("Fetching models...");
                const models = await modelList();
                console.log("Models received:", models);
                displatch(newmodels(models.data))
            } catch (error) {
                console.error("Error fetching models:", error);
            } finally {
                setSearching(false);
            }
        }
        fetchModels();
    }, []);
    console.log("models: ", models)
    return (
        <>
            <div className="max-w-screen-xl mx-auto pt-20">
                {searching ? <Loading /> 
                :
                <>
                    <DisplayTableModels 
                        headers={["Indeks", "Nazwa modelu", "Opis"]} 
                        items={models} 
                        clickedDataset={clickedDataset} 
                        setClickedDataset={setClickedDataset}
                    /> 
                    <NewModelTab tabNames={models.value}/>
                </>
                }
                
            </div>
        </>
    );
}
