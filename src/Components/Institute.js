import React, { useState } from "react";
import apiClient from "./http-common";

const Institute = () => {
    const [result, setResult] = useState([]);
    async function getInstitute() {
        try {
            const res = await apiClient.get("/Institute/GetInstitute");
            console.warn(res.data);
            setResult(result => [...result, res.data]);
        } catch (err) {
            console.warn(err);
        }
    }
    return (
        <>
            <h1>Institute:</h1>
            {/* <h2>{a.id}</h2> */}
            <div className="App">
      <ul>

        {result.map((data) => (

        <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
            <button onClick={getInstitute}>getit</button>
        </>
    );
}

export default Institute;
