import styled from "@emotion/styled";
import { Card } from "../component/base";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Container = styled.div`
`;

const ImageWrapper = styled.div`
    background-color: black;
`;

const Backdrop = styled.img`
    display: block;
    width: 1400px;
    margin: 0 auto;
    object-fit: cover;
`;

const Description = styled.div`
    position: relative;
    box-sizing: border-box;
    border-radius: 20px;
    width: 1200px;
    margin: -250px auto 0;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.6);
`;
const UpperDescription = styled.div`
    display: flex;
    align-items: start;
`;

const InfoContainer = styled.div`
    display: inline-block;
    margin-left: 32px;

    & > * {
        margin-top: 16px;
    }
    
`;

const Title = styled.h1`
    margin: 0px;
    font-size: 48px;
    width: 800px;
`;

const Info = styled.div`
    font-size: 24px;
`;

const Overview = styled.p`
    white-space: normal;
    padding: 4px 32px;
    width: 1150px;
    line-height: 1.5;
    font-style: italic;
    margin-top: 64px;
    margin-bottom: 800px;
`;

const Genre = styled.div`
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid white;
    border-radius: 20px;
    text-align: center;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:not(:first-of-type) {
        margin-left: 8px;
    }

    &:hover {
        background-color: white;
        color: black;
    }
`;

export default function Movie() {
    const [data, setData] = useState({
        backdrop_path: "",
        poster_path: ""
    });
    
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const imageStyle = {
        boxShadow: "0 0 10px 2px black"
    };

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const { data, status } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko&region=kr`);
                if (status < 200 || status >= 300) {
                    throw new Error("잘못된 ID");
                }
                setData(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }

        fetchMovie();
    }, [id]);

    return (
        <div>
            {loading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton width={1400} height={788} style={{ display: "block", margin: "0 auto"}}/>
                    <Skeleton width={1200} height={400} style={{ display: "block", margin: "-250px auto"}}/>
                </SkeletonTheme>
            ) : (
                <Container>
                    <ImageWrapper>      
                        <Backdrop src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="error" />
                    </ImageWrapper>
                    <Description>
                        <UpperDescription>
                            <Card
                                key={data.id}
                                src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                                radius={15}
                                width="270"
                                height="400"
                                mode="cover"
                                block={false}
                                style={imageStyle}
                            />
                            <InfoContainer>
                                <Title>{data.original_title}</Title>
                                <Info>{`${data.vote_average}★ / ${data.vote_count} votes`}</Info>
                                <Info>{`${data.release_date} / ${data.runtime} mins`}</Info>
                                <div>
                                    {data.genres.map(({id, name}) => (
                                        <Genre key={id}>{name}</Genre>
                                    ))}
                                </div>
                            </InfoContainer>
                        </UpperDescription>
                        <Overview>
                                {data.overview}
                        </Overview>
                    </Description>
                </Container>
            )}
        </div>
    );
}