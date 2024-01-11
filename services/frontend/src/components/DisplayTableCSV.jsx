import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setdatasetdata, setdatasetcolumns } from '../state/DatasetSlice'

export default function DisplayTableCSV({ headers, items, clickedDataset, setClickedDataset, maxItems }) {
  const [clickedColumns, setClickedColumns] = useState([]);
  const [header, setHeader] = useState(headers);
  const [item, setItem] = useState(items);

  const dataset = useSelector((state) => state.dataset);
  const displatch = useDispatch();

  const toggleClickedColumn = (index) => {
    if (clickedColumns.includes(index)) {
      setClickedColumns(clickedColumns.filter((col) => col !== index));
    } else {
      setClickedColumns([...clickedColumns, index]);
    }
  };

  const handleDeleteColumns = () => {
    const updatedHeaders = header.filter((_, index) => !clickedColumns.includes(index));
    const updatedItems = item.map((data) =>
      data.filter((_, index) => !clickedColumns.includes(index))
    );

    displatch(setdatasetdata(updatedItems))
    displatch(setdatasetcolumns(updatedHeaders))
    setHeader(updatedHeaders);
    setItem(updatedItems);
    setClickedColumns([]);
  };

  console.log(clickedColumns);
  console.log("dataset: ", dataset);
  const mapHeaders = header.map((name, index) => (
    <th
      key={index}
      scope="col"
      className={`px-6 py-3 cursor-pointer ${clickedColumns.includes(index) ? "bg-green-100" : ""}`}
      onClick={() => toggleClickedColumn(index)}
    >
      {name}
    </th>
  ));

  const displayedItems = item.slice(0, 10); // Use updated 'item' state here

  const mapItems = displayedItems.map((data, rowIndex) => {
    const tableCells = data.map((cell, cellIndex) => (
      <td
        key={cellIndex}
        className={`px-6 py-4 whitespace-nowrap ${clickedColumns.includes(cellIndex) ? "bg-green-100" : ""}`}
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
      <button
        type="submit"
        className="text-white max-w-screen-xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={handleDeleteColumns}
      >
        Delete columns
      </button>
    </div>
  );
}
