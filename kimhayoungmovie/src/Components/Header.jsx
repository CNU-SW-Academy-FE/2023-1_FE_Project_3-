import {Link} from "react-router-dom"
import styled from "styled-components"

export default function Header () {
    return (
        <Container>
            <Cell className ="left">
                <Link to ="/">
                    <Img src ={logoImg} alt ="로고" /> 
                </Link>
              <Link to ="/movies/popular">인기작</Link>
              <Link to ="/movies/top_rated">Top rated</Link>
              <Link to ="/movies/upcoming"> Upcoming </Link>
            </Cell>
        </Container>
    )
}

const logoImg = 
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/128px-IMDb_Logo_Square.svg.png?20200218171646"

const Container = styled.div`
  margin: 0 2.5rem;
  padding: 0.5rem 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Cell = styled.div`
  display: flex;
  align-items: center;
  &.left {
    gap: 3rem;
    font-size: 1.3rem;
    cursor: pointer;
  }
`

const Img = styled.img`
  width: 80px;
  cursor: pointer;
  display: block;
`