import { useLoaderData } from "react-router-dom";
import { useData } from "../hooks/useData";
import styled from "@emotion/styled";
import { useMovieData } from "../hooks/useMovieData";

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
    height: 300px;
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
    height: 155%;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const PosterImageBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 2px 2px 50px 5px black, -2px -2px 50px 5px black;
`;
const DetailBox = styled.div``;

export function loader({ params }) {
    return params;
}

const Movie = () => {
    const { movieId } = useLoaderData();
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
    } = useMovieData();
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
                            <img
                                src={`${
                                    import.meta.env.VITE_IMAGE_BASEURL
                                }${poster_path}`}
                                alt={title}
                            />
                        </PosterImageBox>
                    </MovieInfo>
                </BottomBox>
            </Center>
        </Wrapper>
    );
};

export default Movie;
