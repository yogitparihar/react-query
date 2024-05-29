import React from "react";
import { useCustomQuery } from "./useCustomQuery";

export const RQAlbum = () => {
  const onSuccess = () => {
    console.log("Data fetched");
  };

  const onError = () => {
    console.log("Data not fetched");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useCustomQuery(onSuccess, onError);

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "album",
  //   fetchAlbum,
  //   {
  //     // cacheTime:2000,
  //     // staleTime:30000
  //     // refetchOnMount: true,
  //     // refetchOnWindowFocus: "always",
  //     //refetchInterval: 1000,
  //     //refetchIntervalInBackground:true
  //     //enabled: false,
  //     onSuccess: onSuccess,
  //     onError: onError,
  //     select: (data) => data.data.map((item) => item.title), // data transform before using in the jsx
  //   }
  // );

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log("sf", { isLoading, isFetching });

  return (
    <div>
      <h2>RQAlbum</h2>
      <button onClick={refetch}>Fetch album data</button>
      {/* {data?.data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })} */}
      {data.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};
