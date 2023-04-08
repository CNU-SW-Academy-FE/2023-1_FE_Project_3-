import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_MOVIE_BASEURL;
axios.defaults.headers.common["Authorization"] = `Bearer ${
    import.meta.env.VITE_AUTH_TOKEN
}`;
axios.defaults.headers.post["Content-type"] = import.meta.env.VITE_CONTENT_TYPE;

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
