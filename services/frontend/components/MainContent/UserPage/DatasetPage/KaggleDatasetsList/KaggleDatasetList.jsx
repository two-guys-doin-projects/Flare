import React, { useState } from 'react';

export function KaggleDatasetList({ datasetColumns }) {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const mapKaggleColumnsName = datasetColumns.head[0];
  const columns = Object.keys(mapKaggleColumnsName);
  const [filteredColumns, setFilteredColumns] = useState(columns);

  const handleColumnClick = (index) => {
    if (selectedColumns.includes(index)) {
      setSelectedColumns(selectedColumns.filter((col) => col !== index));
    } else {
      setSelectedColumns([...selectedColumns, index]);
    }
  };

  const handleRemoveColumn = async () => {
    const newFilteredColumns = columns.filter((_, index) => !selectedColumns.includes(index));
    setFilteredColumns(newFilteredColumns);

    const selectedColumnIndexes = selectedColumns.join('%2C');
    
    try {
      const data = await (await fetch(`http://0.0.0.0:8081/selected_columns_of_dataframe?index=${selectedColumnIndexes}`)).json();
      console.log(data)
    } catch (err) {
      console.log(err.message);
    }
  
    setSelectedColumns([]);
  };
  

  const getColumnStyle = (index) => {
    return selectedColumns.includes(index) ? { background: 'gray' } : {};
  };
  console.log('kolumny: ' + selectedColumns)
  return (
    <div>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              {filteredColumns.map((columnName, index) => (
                <th
                  key={columnName}
                  style={getColumnStyle(index)}
                  onClick={() => handleColumnClick(index)}
                >
                  {columnName}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {datasetColumns.head.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {filteredColumns.map((columnName, columnIndex) => (
                  <td key={columnName} style={getColumnStyle(columnIndex)}>
                    {item[columnName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleRemoveColumn}>Usuń wybrane kolumny</button>
    </div>
  );
}

export default KaggleDatasetList;
