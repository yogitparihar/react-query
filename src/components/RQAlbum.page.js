import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const fetchAlbum =()=>{  return axios.get("https://jsonplaceholder.typicode.com/albums")}
export const RQAlbum = () => {
  const { isLoading, data,isError,error,isFetching } = useQuery("album",fetchAlbum,{staleTime:30000});
  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  console.log("sf",{isLoading,isFetching})

  return (
    <div>
      <h2>RQAlbum</h2>
      {data?.data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};
