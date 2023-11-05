import styled from "styled-components";
import { movies } from "../util/test_data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PosterItem from "../Components/PosterItem";
import { useState, useEffect } from "react";
import { config } from "../../constant";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=" +
        config.API_KEY
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  }, []);

  return (
    <Container>
      <MoviePoster>
        <Carousel
          showThumbs
          autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={300}
        >
          {popularMovies.map((movie) => {
            return <PosterItem key={movie.id} movie={movie} />;
          })}
        </Carousel>
      </MoviePoster>
    </Container>
  );
}

const Container = styled.div``;
const MoviePoster = styled.div``;
// display:flex; align-items:center;
