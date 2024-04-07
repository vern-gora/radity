import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function App(props) {
  const URL = "https://tasks.yunusemre.dev/api/tasks";

  const fetchData = () => {
    return axios
      .get("https://tasks.yunusemre.dev/api/tasks")
      .then(({ data }) => {
        data.forEach((item) => {
          console.log(item.title);
        });
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const [data, setData] = useState("");

  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      // setData(JSON.stringify(data));
      setDataInfo(data);
    });
  }, []);

  return (
    <div>
      <h1>My list:</h1>
      {dataInfo.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
      {/* <p>{data}</p> */}
      <ol></ol>
    </div>
  );
}
