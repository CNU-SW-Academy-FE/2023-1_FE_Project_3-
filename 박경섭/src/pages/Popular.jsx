import styled from "@emotion/styled";
import {
  CardList,
  CardListSkeleton,
  SearchBar,
  Category,
} from "../component/domain";
import { useState, useEffect } from "react";
import axios from "axios";
import useFilter from "../hooks/useFilter";

const Container = styled.div`
  & > * {
    margin-top: 16px;
  }
`;

export default function Popular() {
  const [data, setData] = useState({
    results: [],
  });
  const [loading, setLoading] = useState(true);

  const { filteredItems, handleChange } = useFilter({
    items: data.results,
    keywords: ["original_title", "title"],
  });

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const { data, status } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&region=kr`
        );

        if (status < 200 || status >= 300) {
          throw new Error("API 호출 오류");
        }

        setData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchRecent();
  }, []);

  return (
    <Container>
      <Category>Popular</Category>
      <SearchBar
        onChange={handleChange}
        type="text"
        placeholder="typing movie title..."
      />
      {loading ? <CardListSkeleton /> : <CardList data={filteredItems} />}
    </Container>
  );
}
