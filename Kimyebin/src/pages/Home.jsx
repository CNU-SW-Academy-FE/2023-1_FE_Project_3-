import styled from "styled-components";
import PosterItem from "../Components/PosterItem";
import { useEffect } from "react";
import { config } from "../constant";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [ popularMovies, setPopularMovies ] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=" + config.API_KEY
    )
    .then((res) => res.json())
    .then((data) => {
      setPopularMovies(data.results);
    })
  }, [])

  return (
    <Container>
      <MoviePoster>
        <Carousel
            showThumbs
            autoPlay
            infiniteLoop
            shoiwStatus={false}
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
  .carousel .thumbs-wrapper {
    margin: 0;
  }
`;

export default Home;