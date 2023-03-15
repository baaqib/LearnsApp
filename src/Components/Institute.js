import React, { useState,useRef } from "react";
import apiClient from "./http-common";

const Institute = () => {
  const [result, setResult] = useState([]);
  const [resul, setResul] = useState({id:0,name:''});

  const post_name = useRef(null);


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

  async function addInstitute() {
    
    const postData = {
        name: post_name.current.value
    }
    
    try {
        const re = await apiClient.post(`/Institute/AddInstitute`,postData, {
            headers: {
              "x-access-token": "token-value",
            },});
        console.warn(re.data);
      } catch (err) {
        console.warn(err);
      }
  }

  return (
    <>
      <h1>Institute:</h1>
      <h1>{post_name.current}</h1>
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

      <input type="text" ref={post_name}/>
      <button onClick={addInstitute}>addInstitute</button>
    </>
  );
};

export default Institute;
