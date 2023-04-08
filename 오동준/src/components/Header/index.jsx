import styled from "@emotion/styled";
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-contents: flex-start;
    align-items: center;
    width: 100%;
`;

const Header = () => {
    return (
        <Wrapper>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </Wrapper>
    );
};

export default Header;
