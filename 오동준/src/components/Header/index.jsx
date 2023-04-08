import styled from "@emotion/styled";
import IMDB from "../../icons/imdb.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: black;
    & a {
        text-decoration: none;
    }
`;

const LinkItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin: 0;
    min-width: 70px;
    width: fit-content;
    height: 40px;
    background-image: url(${({ src }) => (src ? src : "none")});
    background-size: cover;
    background-repeat: no-repeat;
    &:hover {
        background-color: #6c6c6c;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <Link to="/">
                <LinkItem
                    src={IMDB}
                    style={{ margin: "10px 30px", padding: "0", "&:hover": {} }}
                />
            </Link>
            <Link to="/popular">
                <LinkItem>Popular</LinkItem>
            </Link>
            <Link to="/toprated">
                <LinkItem>Top Rated</LinkItem>
            </Link>
            <Link to="/upcoming">
                <LinkItem>Upcoming</LinkItem>
            </Link>
            {/* <Link to="/bookmark">
                <LinkItem>Bookmark</LinkItem>
            </Link>
            <Link to="/history">
                <LinkItem>History</LinkItem>
            </Link> */}
        </Wrapper>
    );
};

export default Header;
