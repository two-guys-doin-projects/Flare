export function KaggleDatasetList({ datasetColumns}) {
    
    const mapKaggleColumnsName = datasetColumns.head.map((item, index) => (
        <tr key={index}>
          {Object.keys(item).map((key) => (
            <th key={key}>
              {key}
            </th>
          ))}
        </tr>
      ));

    const mapKaggleColumns = datasetColumns.head.map((item, index) => (
        <tr key={index}>
          {Object.keys(item).map((key) => (
            <td key={key}>
              {item[key]}
            </td>
          ))}
        </tr>
      ));
    return (<div>
                <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr>
                                {mapKaggleColumnsName[0]}
                            </tr>
                        </thead>
                    </table>
                </div>
                    
                <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            {mapKaggleColumns}
                        </tbody>
                    </table>
                </div>        
            </div>
  )
}
  export default KaggleDatasetList