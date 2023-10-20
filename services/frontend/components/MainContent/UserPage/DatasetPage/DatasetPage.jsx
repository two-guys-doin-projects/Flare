import React, { useState, useEffect } from 'react';
import './DatasetPage.css'

function DatasetPage(){
      const [datasetName, setDatasetName] = useState("")
      const [datasetData, setDatasetData] = useState([{ ref: "", subtitle: "" }])
    
      function handleChange(event) {
        setDatasetName(event.target.value)
      }
    
      const handleClick = async () => {
        try {
            const data = await (await fetch(`http://0.0.0.0:8081/show_available_datasets?name=${datasetName}`)).json()
            setDatasetData(data)
        } catch (err) {
            console.log(err.message)
        }
    }
    console.log(datasetData)
    const mapKaggleData = datasetData.map(data =>
        <tr key={data.ref}>
                    <td>{data.ref}</td>
                    <td>{data.subtitle}</td>
        </tr>
    )
    console.log(mapKaggleData)
      return (
        <>
          <div className="user-content">
              <input
                type="text"
                placeholder="Dataset name"
                onChange={handleChange}
                name="datasetName"
                value={datasetName}
              />
              <button onClick={handleClick}>Add Data</button>
            </div>
            <h1>Wyszukaj coś</h1>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                    <tr>
                    <th>Nazwa zbioru</th>
                    <th>Krótki opis</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                    {mapKaggleData}
                </tbody>
                </table>
            </div>
          
        </>
      );
    }

export default DatasetPage