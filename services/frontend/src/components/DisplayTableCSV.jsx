import { useState } from "react";

export default function DisplayTableCSV({ headers, items, clickedDataset, setClickedDataset, maxItems }) {
  const [clickedColumn, setClickedColumn] = useState(null);

  const mapHeaders = headers.map((name, index) => (
    <th
      key={index}
      scope="col"
      className={`px-6 py-3 cursor-pointer ${
        clickedColumn === index ? "bg-green-100" : "" 
      }`}
      onClick={() => setClickedColumn(index)} 
    >
      {name}
    </th>
  ));

  const displayedItems = items.slice(0, 10); 

  const mapItems = displayedItems.map((data, rowIndex) => {
    const rowData = data[0].split(';');
    const tableCells = rowData.map((cell, cellIndex) => (
      <td
        key={cellIndex}
        className={`px-6 py-4 whitespace-nowrap ${
          clickedColumn === cellIndex ? "bg-green-100" : ""
        }`}
      >
        {cell}
      </td>
    ));

    return <tr key={rowIndex}>{tableCells}</tr>;
  });

  return (
    <div className="relative overflow-x-auto">
      <div className=" overflow-y-auto"> 
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs uppercase">
            <tr>{mapHeaders}</tr>
          </thead>
          <tbody>{mapItems}</tbody>
        </table>
      </div>
    </div>
  );
}
