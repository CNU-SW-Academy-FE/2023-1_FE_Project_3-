import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import {movies} from '../util/test_data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import PosterItem from "../src/Components/PosterItem";
import {useEffect , useState} from "react";
import {config} from "../constant"


export default function Home () {
    const [testmovie, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=" + 
         config.API_KEY
        )
        .then((res) => res.json())
        .then((data) => {
         console.log(data) // 404
         setPopularMovies(data.results)  
         
        })
 
     }, [])

    
    return(
        <Container>
            <MoviePoster>
                <Carousel 
                  showThumbs
                  autoPlay
                  infiniteLoop
                  showStatus = {false}
                  transitionTime ={3}>
               
                {testmovie.map((movie) => (

                    <PosterItem key ={movie.id} movie ={movie} /> // movie.id = 식별자 
                ))}
               
                </Carousel>
            </MoviePoster>
        </Container>
    )
}

const Container = styled.div``
const MoviePoster = styled.div`
display :flex; 
align-item : center;`