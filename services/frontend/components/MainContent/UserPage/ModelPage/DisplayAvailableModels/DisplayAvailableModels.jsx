import React from "react";
import './DisplayAvailableModels.css'
export function DisplayAvailableModels({
  modelList
}) {
    const mapModelList = modelList.map((model, index) => 
        <tr  key={index}>
            <td >{index}</td>
            <td >{model}</td>
            <td >Zrobi się w przyszłości</td>
        </tr>
    ) 
  return <><div className="tbl-header">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>Indeks</th>
                                    <th>Nazwa moelu</th>
                                    <th>Krótki opis</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content--model">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                {mapModelList}
                            </tbody>
                        </table>
                    </div></>;
}
  