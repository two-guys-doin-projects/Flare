import { useState } from "react";
import { selectedmodel } from '../state/ModelListSlice';
import { useSelector, useDispatch } from "react-redux";

export default function DisplayTableModels({ headers, items, clickedDataset, setClickedDataset }) {
    const models = useSelector((state) => state.models);
    const dispatch = useDispatch(); 

    const mapHeaders = headers.map((name, index) => (
        <th key={index} scope="col" className="px-6 py-3">
        {name}
        </th>
    ));

    const mapItems = items.value.map((value, index) => (
        <tr
        key={index}
        className={`border-b ${
            clickedDataset === index ? 'bg-green-100' : ''
        }`}
        onClick={() => {setClickedDataset(index), dispatch(selectedmodel(value))}}
        >
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
            {index}
        </th>
            <td className="px-6 py-4">
            {value}
            </td>
            <td className="px-6 py-4">
            Zrobi się w przyszłości
            </td>
        </tr>
    ));

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase">
          <tr>{mapHeaders}</tr>
        </thead>
        <tbody>{mapItems}</tbody>
      </table>
    </div>
  );
}
