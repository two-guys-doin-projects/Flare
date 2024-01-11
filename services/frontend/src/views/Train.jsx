import { useSelector, useDispatch } from "react-redux";
import { selectedmodel } from '../state/ModelListSlice'
import DisplayDatasetTrain from "../components/DisplayDatasetTrain";

export default function Train() {
  const models = useSelector((state) => state.models);
  const dataset = useSelector((state) => state.dataset);
  const dispatch = useDispatch();
  console.log(models)
    return(
        <>
            <div className="max-w-screen-xl mx-auto pt-20">
                <h3 className="flex flex-col items-center mb-4">Selected model is {models.name}</h3>
                <>
                    <DisplayDatasetTrain
                        headers={dataset.columns}
                        items={dataset.value}
                /> 
                </>
            </div>
        </>
    )
}