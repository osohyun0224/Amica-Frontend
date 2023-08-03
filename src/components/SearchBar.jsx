import styled from "styled-components";
import PropTypes from "prop-types";
import searchImage from "../assets/images/search.png";

const Container = styled.div`
  padding: 8px 12px;
  border: 1px solid white;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 300px;
`;

const SearchImage = styled.img`
  width: 18px;
  margin-right: 8px;
`;

const SearchInputField = styled.input`
  width: 100%;
  background-color: white;
  border: none;
  outline: none;
  font-family: 'Nanum Gothic', sans-serif;
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <Container>
      <SearchImage src={searchImage} alt="" />
      <SearchInputField
        type="text"
        name=""
        id=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength="30"
      />
    </Container>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
