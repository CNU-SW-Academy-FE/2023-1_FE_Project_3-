import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import styled from "@emotion/styled";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: black;
`;

function App() {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    );
}

export default App;
