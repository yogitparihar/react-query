import axios from "axios";
import React, { useEffect, useState } from "react";
export const Album = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  }, []);
  
  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div>
      <h1>Album page</h1>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <li>{data.title}</li>
          </div>
        );
      })}
    </div>
  );
};
