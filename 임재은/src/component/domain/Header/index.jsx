import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    margin: 0px;
    padding: 0px;
    box-shadow: 0 -50px 100px white;
`;

const HomeButton = styled.button`
    display: inline-block;
    box-sizing: border-box;
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

const NavigationList = styled.ul`
    display: inline-block;
    list-style: none;
`;

const NavigationItem = styled.li`
    float: left;
    padding: 8px 16px;
    font-size: 24px;
    border-radius: 8px;
    background-color: transparent;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
    }

    &:not(:first-of-type) {
        margin-left: 48px;
    }
`;

const AnchorStyle = {
    textDecoration: "none",
    color: "white",
}


export default function Header({ children }) {
    return (
        <div>
            <Container>
                <HomeButton><Link to="/" style={HomeAnchor}>IMDb</Link></HomeButton>
                <NavigationList>
                    <NavigationItem><Link to="/popular" style={AnchorStyle}>Popular</Link></NavigationItem>
                    <NavigationItem><Link to="/toprated" style={AnchorStyle}>Top Rated</Link></NavigationItem>
                    <NavigationItem><Link to="/upcoming" style={AnchorStyle}>Upcoming</Link></NavigationItem>
                </NavigationList>
            </Container>
            {children}
        </div>
    );
}