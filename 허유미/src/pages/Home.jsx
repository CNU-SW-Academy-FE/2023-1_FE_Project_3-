import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { config } from "../constant";
import PosterItem from "../Components/PosterItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Home() {
    const  [popularMovies, setPopularMovies] = useState([]);


    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=" +
            config.API_KEY
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setPopularMovies(data.results)
        })

    }, [])


    return(
        <Container>
            <MoviePoster>
                <Carousel
                    showThumbs
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    transitionTime={3}
                >
                    {popularMovies.map((movie) => (
                        <PosterItem key={movie.id} movie={movie} />
                    ))}
                </Carousel>
            </MoviePoster>
        </Container>
    )

}

const Container = styled.div`
`;

const MoviePoster = styled.div`
    display: flex;
    align-items: center;
    .carousel .thunbs-wrapper{
        margin: 0;
    }
`

export default Home;