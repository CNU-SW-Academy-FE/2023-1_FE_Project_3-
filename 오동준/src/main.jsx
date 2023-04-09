import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Movie, { loader as MovieLoader } from "./pages/Movie";
import List, { loader as ListLoader } from "./pages/List";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_MOVIE_BASEURL;
axios.defaults.headers.common["Authorization"] = `Bearer ${
    import.meta.env.VITE_AUTH_TOKEN
}`;
axios.defaults.headers.post["Content-type"] = import.meta.env.VITE_CONTENT_TYPE;

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/movie/:type",
                element: <List />,
                loader: ListLoader,
            },
            {
                path: "/movie/detail/:movieId",
                element: <Movie />,
                loader: MovieLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
