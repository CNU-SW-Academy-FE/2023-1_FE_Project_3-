import { useLoaderData } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as Star } from "../icons/star.svg";
import { useApi } from "../hooks/useApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
`;

const Center = styled.div`
    display: block;
    width: 80%;
    min-height: calc(100vh - 60px);
    height: fit-content;
    margin-top: 60px;
    text-align: center;
    position: relative;
`;

const BottomBox = styled.div`
    width: 100%;
    height: 200px;
    z-index: 1;
    background-color: black;
    position: absolute;
    bottom: 0;
`;

const MovieInfo = styled.div`
    flex-grow: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 130%;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
`;

const PosterImageBox = styled.div`
    /* border-radius: 10px; */
    background-color: transparent;
    position: absolute;
    left: 30px;
    z-index: -1;
    box-shadow: 2px 2px 20px white, -2px -2px 20px white;
    border-radius: 10px;
    bottom: 0;
    margin-bottom: 30px;
`;

const DetailBox = styled.div`
    position: absolute;
    left: 320px;
    bottom: 0;
    width: calc(100% - 320px);
    height: 410px;
    color: white;
`;

const TitleBox = styled.div`
    text-align: left;
    /* position: relative; */
    font-family: "Noto Sans KR";
    font-weight: 800;
    font-size: 60px;
`;

const TextBox = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 16px;
    margin: 10px 0;
`;

const MyStar = styled.div`
    display: inline-block;
    & svg {
        fill: white;
        stroke: white;
    }
    margin: 0;
    padding: 0 7px;
    &:hover {
        cursor: pointer;
    }
`;

const GenreBox = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`;

const GenreTag = styled.div`
    border: 2px solid white;
    border-radius: 30px;
    text-align: center;
    vertical-align: middle;
    padding: 5px;
    margin-top: 10px;
`;

const SynopsisBox = styled.div`
    width: 100%;
    word-wrap: break-word;
    text-align: left;
    font-size: 16px;
    height: 180px;
    overflow: scroll;
    scrollbar-width: none;
    z-index: -1;
`;

export function loader({ params }) {
    return params;
}

const Movie = () => {
    const { movieId } = useLoaderData();
    const { data, loading, error } = useApi(
        `/movie/${movieId}${import.meta.env.VITE_QUERY}`
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    const {
        backdrop_path,
        title,
        poster_path,
        vote_average,
        vote_count,
        runtime,
        release_date,
        genres,
        overview,
    } = data;
    return (
        <Wrapper>
            <Center>
                <img
                    style={{ width: "99%" }}
                    src={`${
                        import.meta.env.VITE_IMAGE_BASEURL
                    }${backdrop_path}`}
                    alt={title}
                />
                <BottomBox>
                    <MovieInfo>
                        <PosterImageBox>
                            {
                                <img
                                    src={`${
                                        import.meta.env.VITE_IMAGE_BASEURL
                                    }${poster_path}`}
                                    alt={title}
                                    style={{
                                        height: "360px",
                                        borderRadius: "10px",
                                    }}
                                />
                            }
                        </PosterImageBox>
                        <DetailBox>
                            <TitleBox>{title}</TitleBox>
                            <TextBox>
                                {`${vote_average}`}
                                <MyStar>
                                    <Star width={12} height={12} />
                                </MyStar>
                                {`/ ${vote_count} votes`}
                            </TextBox>
                            <TextBox>
                                {`${release_date} / ${runtime} mins`}
                            </TextBox>
                            <GenreBox>
                                {genres.map(({ name }, i) => (
                                    <GenreTag key={i}>{name}</GenreTag>
                                ))}
                            </GenreBox>
                            <SynopsisBox>
                                <div
                                    style={{
                                        margin: "20px 0",
                                        fontWeight: "600",
                                        fontSize: "30px",
                                    }}
                                >
                                    Synopsis
                                </div>
                                {overview}
                            </SynopsisBox>
                        </DetailBox>
                    </MovieInfo>
                </BottomBox>
            </Center>
        </Wrapper>
    );
};

export default Movie;
