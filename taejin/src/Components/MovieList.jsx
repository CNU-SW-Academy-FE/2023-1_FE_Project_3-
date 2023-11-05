import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../constant";
import Card from "./Card";
import SearchBox from "../Components/SearchBox";
import styled from "styled-components";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.type ? params.type : "popular"
      }?language=ko-KR&api_key=` + config.API_KEY
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setKeyword("");
      });
  }, [params.type]);

  return (
    <Container>
      <SearchBox keyword={keyword} onChangeKeyword={onChangeKeyword} />
      <Title></Title>
      <Group>
        {movies
          .filter(
            (movie) =>
              movie.original_title
                .toLowerCase()
                .includes(keyword.toLowerCase()) ||
              movie.title.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((movie) => {
            return <Card key={movie.id} movie={movie}></Card>;
          })}
      </Group>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 3rem 3rem 3rem;
`;

const Title = styled.h2`
  font-zise: 1.75rem;
  margin-bottom: 10px;
`;

// flex-flow: row wrap;

// width: 100%;
// display: flex;
// flex-wrap: wrap;
// gap: 10px;
const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;

  @media (max-width: 1330px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: 1148px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 926px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 776px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 664px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 532px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 398px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
