import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
    box-shadow: 0 3px 10px white;
`;

const Wrapper = styled.div`
    display: inline-block;
`;

const HomeButton = styled.button`
    margin: 8px 32px;
    background-color: yellow;
    border: none;
    color: black;
    font-size: 40px;
    font-weight: bold;
    border-radius: 4px;
    letter-spacing: -2.5px;
    font-stretch: 90%;

    &:hover {
        opacity: 0.7;
    }
`;

const HomeAnchor = {
    textDecoration: "none",
    color: "black",
}

const TypeButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 28px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const TypeAnchorStyle = {
    textDecoration: "none",
    color: "white",
}

export default function Header({ children }) {
    return (
        <div>
            <Container>
                <HomeButton><Link to="/" style={HomeAnchor}>IMDb</Link></HomeButton>
                <TypeButton><Link to="/" style={TypeAnchorStyle}>Popular</Link></TypeButton>
                <TypeButton><Link to="/" style={TypeAnchorStyle}>Top Rated</Link></TypeButton>
                <TypeButton><Link to="/" style={TypeAnchorStyle}>Upcoming</Link></TypeButton>
            </Container>
            {children}
        </div>
    );
}