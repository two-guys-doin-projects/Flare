export default function DisplayDatasetTrain({ headers, items }) {
  const mapHeaders = headers.map((name, index) => (
    <th
      key={index}
      scope="col"
      className="px-6 py-4 font-medium whitespace-nowrap"
    >
      {name}
    </th>
  ));

  const displayedItems = items.slice(0, 10);

  const mapItems = displayedItems.map((data, rowIndex) => {
    const tableCells = data.map((cell, cellIndex) => (
      <td
        key={cellIndex}   
        className="px-6 py-4"
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
