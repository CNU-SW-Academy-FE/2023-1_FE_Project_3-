import { Carousel } from "react-responsive-carousel";
import styled from "@emotion/styled";
import { ReactComponent as ArrowLeft } from "../icons/chevron-left.svg";
import { ReactComponent as ArrowRight } from "../icons/chevron-right.svg";
import { ReactComponent as Star } from "../icons/star.svg";
import { useCallback, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const CustomUl = styled.div`
    margin: 0;
    padding-top: 60px;
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    left: 0;
    flex-grow: 1;
    overflow: hidden;
`;

const CustomLi = styled.div`
    /* width: 100vw; */
    /* height: 100vh; */
    margin: 0;
    padding: 0;
    transform: translate(
        calc(-100vw * ${({ curIdx }) => (curIdx ? curIdx : 0)}),
        0
    );
    transition: transform 1s ease-in-out;
`;

const Blur = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        0deg,
        hsla(0, 0%, 9%, 1) 10%,
        hsla(0, 0%, 9%, 0.8) 20%,
        hsla(0, 0%, 9%, 0.6) 30%,
        hsla(0, 0%, 9%, 0.4) 40%,
        hsla(0, 0%, 9%, 0.2) 50%,
        hsla(0, 0%, 9%, 0)
    );
`;

const CustomImg = styled.img`
    width: 100vw;
    height: calc(100vh - 60px);
`;

const MovieInfo = styled.div`
    position: absolute;
    left: 50px;
    bottom: 38%;
    width: 100%;
    height: 100px;
    z-index: 5;
    color: white;
`;

const Title = styled.div`
    width: 100%;
    height: fit-content;
    font-size: 70px;
    font-weight: 900;
    margin-bottom: 40px;
`;

const AdditionalInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: fit-content;
    font-size: 20px;
    margin-bottom: 30px;
`;

const Overview = styled.div`
    width: 70%;
    height: fit-content;
    font-style: italic;
    font-size: 20px;
    line-height: 1.5rem;
`;

const ArrowWrapper = styled.div`
    position: absolute;
    width: fit-content;
    height: calc(100vh - 60px);
    & svg {
        stroke: #919191;
    }
    z-index: 1000;
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
    }
    display: flex;
    align-items: center;
`;

const DotWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-evenly;
    align-items: center;
    width: fit-content;
    height: fit-content;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 50%);
`;

const Dot = styled.div`
    width: ${({ selected }) => (selected ? "10px" : "8px")};
    height: ${({ selected }) => (selected ? "10px" : "8px")};
    border: 0;
    border-radius: 50%;
    background-color: ${({ selected }) => (selected ? "white" : "#717171")};
    transition: all 1s ease-in-out;
    &:hover {
        cursor: pointer;
    }
`;

const MyStar = styled.div`
    & svg {
        stroke: white;
    }
    margin: 0;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`;

const Home = () => {
    const iconSize = 40;
    const [curIdx, setCurIdx] = useState(0);
    const { data, loading, error } = useApi(
        `/movie/popular${import.meta.env.VITE_QUERY}`
    );
    const { results: movies } = data || [];

    const handleRightclick = useCallback(() => {
        setCurIdx(curIdx === movies.length - 1 ? 0 : curIdx + 1);
    }, [curIdx, movies]);

    const handleLeftclick = useCallback(() => {
        setCurIdx(curIdx === 0 ? movies.length - 1 : curIdx - 1);
    }, [curIdx, movies]);

    useEffect(() => {
        const tick = setInterval(handleRightclick, 3000);
        return () => clearInterval(tick);
    }, [curIdx, movies]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <Wrapper>
            <CustomUl>
                {movies.map((movie, i) => (
                    <CustomLi key={i} curIdx={curIdx}>
                        <Blur />
                        <CustomImg
                            src={`${import.meta.env.VITE_IMAGE_BASEURL}${
                                movie.backdrop_path
                            }`}
                            alt={movie.title}
                        />
                        <MovieInfo>
                            <Title>{movie.title}</Title>
                            <AdditionalInfo>
                                {`${movie.release_date} / ${movie.vote_average}`}
                                <MyStar>
                                    <Star fill={"white"} />
                                </MyStar>
                            </AdditionalInfo>
                            <Overview>{movie.overview}</Overview>
                        </MovieInfo>
                    </CustomLi>
                ))}
            </CustomUl>
            <DotWrapper>
                {movies.map((_, i) => (
                    <Dot
                        selected={i === curIdx ? true : false}
                        key={i}
                        onClick={() => setCurIdx(i)}
                    />
                ))}
            </DotWrapper>
            <ArrowWrapper style={{ left: "0" }} onClick={handleLeftclick}>
                <ArrowLeft width={iconSize} height={iconSize} />
            </ArrowWrapper>
            <ArrowWrapper style={{ right: "0" }} onClick={handleRightclick}>
                <ArrowRight width={iconSize} height={iconSize} />
            </ArrowWrapper>
        </Wrapper>
    );
};

export default Home;
