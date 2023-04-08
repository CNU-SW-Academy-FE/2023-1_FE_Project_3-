import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Popular from "./pages/List/Popular";
import TopRated from "./pages/List/TopRated";
import Upcoming from "./pages/List/Upcoming";
import Movie from "./pages/Movie";

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
                path: "/popular",
                element: <Popular />,
            },
            {
                path: "/toprated",
                element: <TopRated />,
            },
            {
                path: "/upcoming",
                element: <Upcoming />,
            },
            {
                path: "/movie/:movieId",
                element: <Movie />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
