import React, { useState, useEffect } from 'react';
import './components/Data.css';

function DataViewer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        include_schema_regex: ["^crm$"],
        exclude_schema_regex: ["^sakila$", "^world$"]
      })
    })
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  
  return (
    <div className="user-data-container">
        <h1 >PII Catcher UI</h1>
        <table  className="user-table" >
            <thead>
                <tr>
                    <th>Database</th>
                    <th>Table</th>
                    <th>Field</th>
                    <th>PIILevel</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.database}</td>
                        <td>{item.table}</td>
                        <td>{item.field}</td>
                        <td>{item.PIILevel}</td>
                        <td>{item.Class}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}
export default DataViewer; 