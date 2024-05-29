import { useQuery } from "react-query";
import axios from "axios";
const fetchAlbum = () => {
  return axios.get("https://jsonplaceholder.typicode.com/albums");
};
export const useCustomQuery = (onSuccess, onError) => {
  return useQuery("album", fetchAlbum, {
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => data.data.map((item) => item.title), // data transform before using in the jsx
  });
};
