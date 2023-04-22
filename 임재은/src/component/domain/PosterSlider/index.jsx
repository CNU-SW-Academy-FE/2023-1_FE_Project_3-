import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Wrapper = styled.div`
    /* max-height: 80vh;
    min-height: 80vh; */

    &:hover {
      cursor: pointer
    }
`;

const Description = styled.div`
    position: absolute;
    top: 58%;
    left: 10%;
    text-align: center;
    text-shadow: 0 0 30px black, 0 0 30px black;
    text-align: left;
`;

const Title = styled.h1`
  font-size: 48px;  
`;

const Info = styled.div`
  font-size: 20px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  text-shadow: 0 0 20px black, 0 0 20px black, 0 0 20px black,  0 0 20px black;
  width: 60%;
  font-style: italic;
`;

export default function CarauselList({ data }) {
  useEffect(() => {
    axios.get("")
  });

  return (
      <Carousel autoPlay emulateTouch infiniteLoop centerMode centerSlidePercentage={100} showStatus={false} showThumbs={false} >
        {data.map(({ id, backdrop_path, original_title, release_date, vote_average, overview }) => (
          <Link to={`/movie/${id}`} style={{ color: "white" }} key={id}>
            <Wrapper>
              <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="error" />
              <Description>
                <Title>{original_title}</Title>
                <Info>{release_date + " / " + vote_average + "★"}</Info>
                <Paragraph>{overview}</Paragraph>
              </Description>
            </Wrapper>
          </Link>
        ))}
      </Carousel>
  );
}