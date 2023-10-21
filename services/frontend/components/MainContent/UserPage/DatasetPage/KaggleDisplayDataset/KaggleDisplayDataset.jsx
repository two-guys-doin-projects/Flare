import React from "react";
function KaggleDisplayDataset({
  handleChange,
  datasetName,
  handleClick,
  mapKaggleData,
  handleDownloadDataset,
  datasetLength
}) {
  return <>
                    <div className="user-content">
                        <input type="text" placeholder="Dataset name" onChange={handleChange} name="datasetName" value={datasetName} />
                        <button onClick={handleClick}>Add Data</button>
                    </div>
                    <h1>Wyszukaj coś</h1>
                    <div className="tbl-header">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Indeks</th>
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
                    {datasetLength > 0 && <button onClick={handleDownloadDataset}>Pobierz zbiór danych</button>}
                </>;
}
export default KaggleDisplayDataset