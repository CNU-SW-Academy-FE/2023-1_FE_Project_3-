import styled from 'styled-components'

export default function Header(){
  return(
    <Container>
      헤더입니다.
    </Container>
  )
}

const Container = styled.div`
  background: black;
  color: white;
  height: 100px;
`