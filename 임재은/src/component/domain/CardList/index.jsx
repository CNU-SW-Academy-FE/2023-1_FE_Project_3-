import styled from "@emotion/styled";
import { Card } from "../../base";

const Conatiner = styled.div`
    display: flex;
    margin: -6px 64px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    &::first-line {
        box-shadow: 10px 10px 10px red;
    }
`;

const CardStyle = {
    margin: "64px",
    flexBasis: "calc(33.33% - 10px)"
}

export default function CardList({data}) {
    return (
        <Conatiner>
            {data.map(({ id, poster_path }) => (
                <Card
                    key={id}
                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                    radius={15}
                    width="266"
                    height="400"
                    mode="cover"
                    style={CardStyle}
                />
            ))}
        </Conatiner>
    );
}