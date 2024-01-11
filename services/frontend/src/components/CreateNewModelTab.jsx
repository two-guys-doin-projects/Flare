import React, { useState, useEffect } from "react";
import { modelCreate } from "../api/MachineLearning";

export default function CreateNewModelTab({ name }) {
  const [modelInputs, setModelInputs] = useState({});
  const [formInputs, setFormInputs] = useState({});
  
  useEffect(() => {
    const fetchModelInputs = async () => {
      try {
        console.log("Fetching models...");
        const response = await modelCreate(name);
        console.log("Models inputs received:", response.data);
        setModelInputs(response.data);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchModelInputs();
  }, []);

  const handleInputChange = (key, value) => {
    setFormInputs((prevFormInputs) => ({
      ...prevFormInputs,
      [key]: value,
    }));
  };

  const handleSubmitForm = () =>{

  }

  console.log(formInputs)
    const modelForm = Object.keys(modelInputs).map((key) => {
        switch (modelInputs[key].type) {
        case "int":
            return (
            <div className="flex flex-col items-center mb-4" key={key}>
                <label className="mb-2">{modelInputs[key].description}</label>
                <input
                type="number"
                className="block p-4 text-sm text-black-900 border border-green-300 rounded-lg bg-green-50 focus:ring-white-500 focus:border-green-500 dark:bg-white-700 dark:border-green-600 dark:placeholder-black-800 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500"
                onChange={(e) => handleInputChange(key, e.target.value)}
                />
            </div>
            );
        case "choose_one":
            return (
            <div className="flex flex-col items-center mb-4" key={key}>
                <label className="mb-2">{modelInputs[key].description}</label>
                <select
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleInputChange(key, e.target.value)}
                >
                {modelInputs[key].possible_values.map((value) => (
                    <option key={value}>{value}</option>
                ))}
                </select>
            </div>
            );
        default:
            return null;
        }
    });

  return (
    <>
      {Object.keys(modelInputs).length === 0 ? (
        <p>No model inputs available</p>
      ) : (
        <>
        {modelForm}
        <button
            type="submit"
            className="text-white max-w-screen-xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
            Create model
        </button>
        </>
      )}
      
    </>
  );
}
