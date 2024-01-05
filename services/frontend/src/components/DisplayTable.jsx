import { useState } from "react";

export default function DisplayTable({ headers, items, clickedDataset, setClickedDataset }) {

  const mapHeaders = headers.map((name, index) => (
    <th key={index} scope="col" className="px-6 py-3">
      {name}
    </th>
  ));
  console.log(items)
  const mapItems = items.data.map((data, index) => (
    <tr
      key={index}
      className={`border-b ${
        clickedDataset === index ? 'bg-green-100' : ''
      }`}
      onClick={() => setClickedDataset(index)}
    >
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {index}
      </th>
      {Object.keys(data).map((key) => (
        <td key={key} className="px-6 py-4">
          {data[key]}
        </td>
      ))}
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
