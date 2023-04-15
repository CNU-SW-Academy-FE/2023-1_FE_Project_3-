import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };

    return (
        <AppHeader>
            <AppLogo onClick={handleClick}>
                IMDb
            </AppLogo>
        </AppHeader>
    );
};

const AppHeader = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    background-color: black;
`;

const AppLogo = styled.div`
    height: 30px;
    background-color: yellow;
    color: black;
    font-weight: bold;
    cursor: Pointer;
`;