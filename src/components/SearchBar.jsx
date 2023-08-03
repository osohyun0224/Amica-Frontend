import styled from "styled-components";
import PropTypes from "prop-types";
import searchImage from "../assets/images/search.png";

const Container = styled.div`
  padding: 8px 12px;
  border: 1px solid #D94A56;
  background-color: white;
  border-radius: 22px;
  display: flex;
  align-items: center;
  margin-top : 10px;
  margin-left: 10px;
  width: 300px;
  height:43px;
`;

const SearchImage = styled.img`
  width: 20px;
  margin-right: 8px;
  margin-left: -20px;
`;

const SearchInputField = styled.input`
  width: 100%;
  background-color: white;
  border: none;
  outline: none;
  font-family: 'Nanum Gothic';
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <Container>
      <SearchInputField
        type="text"
        name=""
        id=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength="30"
      />
      <SearchImage src={searchImage} alt="" />
    </Container>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
