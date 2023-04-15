import styled from "styled-components";

function Header() {
  return (
    <Container>
      헤더입니다.
    </Container>
  );
}

const Container = styled.div`
  background: black;
  color: white;
  height: 100px;
`

export default Header; // 바깥에서 쓰겠다는 선언