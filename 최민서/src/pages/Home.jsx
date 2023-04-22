import { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import movie_data from '../../movie_data.json';
import { config } from '../constant';
import PosterItem from "../components/PosterItem";

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=' + config.API_KEY)
        .then(response => response.json())
        .then(json => setPopularMovies(json.results));
    }, []);

    return (
        <Container>
            <MoviePoster>
                <Carousel
                    showThumbs
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    transitionTime={3}
                >
                    {popularMovies.map(movie =>
                        <PosterItem key={movie.id} movie={movie} />
                    )}
                </Carousel>
            </MoviePoster>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    
`;

const MoviePoster = styled.div`
    display: flex;
    align-items: center;

    .carousel .thumbs-wrapper {
        margin: 0;
    }
`;