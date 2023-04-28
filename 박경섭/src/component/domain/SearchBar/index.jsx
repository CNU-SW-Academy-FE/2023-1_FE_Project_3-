import styled from "@emotion/styled";

const SearchBar = styled.input`
  display: block;
  margin: 16px auto;
  padding: 16px 16px;
  width: 1024px;
  height: 48px;
  font-size: 24px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #181818;
  border: none;
  color: white;

  &:focus {
    outline: none;
  }
`;

export default SearchBar;
