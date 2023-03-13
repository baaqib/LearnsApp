import React, { useState } from "react";
import apiClient from "./http-common";

const Institute = () => {
  const [result, setResult] = useState([]);
  const [resul, setResul] = useState({id:0,name:''});

  async function getInstitute() {
    try {
      const res = await apiClient.get("/Institute/GetInstitute");
      setResult(res.data);
    } catch (err) {
      console.warn(err);
    }
  }

  async function getInstituteByID() {
    // const id = get_id.current.value;
    const id = 2;
    if (id) {
      try {
        const re = await apiClient.get(`/Institute/GetInstituteByID/${id}`);
        console.warn(re.data);
        setResul(re.data);
      } catch (err) {
        console.warn(err);
      }
    }
  }

  return (
    <>
      <h1>Institute:</h1>
      <div className="App">
        <ul>
          {result.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
      <h1>{resul.name}</h1>
      <button onClick={getInstitute}>getit</button>
      <button onClick={getInstituteByID}>getInstituteByID</button>
    </>
  );
};

export default Institute;
