import styled from "@emotion/styled";
import { Card } from "../../base";
import { Link } from "react-router-dom";

const Conatiner = styled.div`
  display: flex;
  margin: -6px 32px;
  box-sizing: border-box;
  justify-content: center;
  flex-wrap: wrap;

  & > a > div {
    margin: 8px 4px;
  }
`;

export default function CardList({ data }) {
  return (
    <Conatiner>
      {data?.map(({ id, poster_path }) => (
        <Link to={`/movie/${id}`} key={id}>
          <Card
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            radius={15}
            width="266"
            height="400"
            mode="cover"
          />
        </Link>
      ))}
    </Conatiner>
  );
}
