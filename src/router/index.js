import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages";
import { Homepage } from "../components/Home.page";
import { Album } from "../components/Album.page";
import { RQAlbum } from "../components/RQAlbum.page";

export const router = createBrowserRouter([
    {
        element:<Dashboard/>,
        children:[
            {
                path:'/',
                element:<Homepage/>
            },
            {
                path:'/album',
                element:<Album/>
            },
            {
                path:'/rq-album',
                element:<RQAlbum/>
            }
        ]
    }
])