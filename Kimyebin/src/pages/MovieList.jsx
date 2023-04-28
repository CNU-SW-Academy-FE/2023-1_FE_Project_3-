import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { config } from "../constant";
import Card from "../Components/Card";
import PosterItem from "../Components/PosterItem";
import SearchBox from "../Components/SearchBox";

function MovieList() {

  const params = useParams();

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  
  const onChangeKeyword = e => {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.themoviedb.org/3/movie/${params.type ? params.type : 'popular'}?language=ko-KR&api_key=` +
      config.API_KEY
    )
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
      setKeyword("");
    });
  }, [params.type]);

  return ( 
    <Container>
      <SearchBox keyword={keyword} onChangeKeyword={onChangeKeyword}></SearchBox>
      <Title>
        {(params?.type || "popular").toUpperCase()}
      </Title>
      <Group>
        {
          movies
            .filter(movie => 
              movie.original_title
                .toLowerCase()
                .includes(keyword.toLowerCase()) ||
              movie.title
                .toLowerCase()
                .includes(keyword.toLowerCase())
            )
            .map(movie => (
              <Card key={params?.type + movie.id} movie={movie}></Card>
            ))
        }
      </Group>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 3rem 3rem 3rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin: 2.5rem;
`;

const Group = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

export default MovieList;