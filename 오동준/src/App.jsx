import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
