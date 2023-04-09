import { Link, useLoaderData } from "react-router-dom";
import { useData } from "./../hooks/useData";
import styled from "@emotion/styled";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    display: flex;
    justify-content: center;
`;

const Center = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopBox = styled.div`
    position: fixed;
    top: 60px;
    width: 100%;
    height: fit-content;
    background-color: black;
    z-index: 1;
`;

const SearchBox = styled.div`
    width: 50%;
    border-radius: 30px;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translate(-50%, 20px);
`;

const SearchInput = styled.input`
    font-size: 24px;
    font-family: Nanum Gothic, sans-serif;
    border: 0;
    width: calc(100% - 24px);
    &:focus {
        outline: none;
    }
`;

const MovieType = styled.div`
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 48px;
    color: white;
    width: fit-content;
    height: fit-content;
    padding-top: 20px;
    padding-left: 100px;
`;

const MoviePosters = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    padding-top: 228px;
`;

const PosterImage = styled.img`
    box-sizing: border-box;
    width: 100%;
    border: 2px solid #aaa;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    transition: transform 0.2s ease-in-out;
`;

export function loader({ params }) {
    return params;
}

export default function List() {
    const { type } = useLoaderData();
    // const { data, loading, error } = useApi(`/movie/${type}`);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error.message}</p>;
    const { results } = useData();
    let totalHeight;
    const ref = useRef();
    useEffect(() => {
        totalHeight = ref.current.offsetHeight;
        console.log(totalHeight);
    }, []);

    const [keyword, setKeyword] = useState("");

    return (
        <Wrapper>
            <Center>
                <TopBox ref={ref}>
                    <SearchBox>
                        <SearchIcon width={24} height={24} stroke="#aaa" />
                        <SearchInput
                            placeholder="typing movie title..."
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </SearchBox>
                    <MovieType>{type.toUpperCase()}</MovieType>
                </TopBox>
                <MoviePosters>
                    {results
                        .filter(({ title }, i) => title.indexOf(keyword) > -1)
                        .map(({ poster_path, title, id }, i) => (
                            <Link key={i} to={`/movie/detail/${id}`}>
                                <PosterImage
                                    src={`${
                                        import.meta.env.VITE_IMAGE_BASEURL
                                    }${poster_path}`}
                                    alt={title}
                                />
                            </Link>
                        ))}
                </MoviePosters>
            </Center>
        </Wrapper>
    );
}
