import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("http://localhost:5000/api/tracker")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🕒 Time Tracker Dashboard</h1>
      {data.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Website</th>
              <th>Time Spent (mins)</th>
              <th>Productive</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.website}</td>
                <td>{item.timeSpent}</td>
                <td>{item.productive ? "✅ Yes" : "❌ No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
