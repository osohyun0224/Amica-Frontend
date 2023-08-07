import styled from "styled-components";
import PropTypes from "prop-types";
import searchImage from "../assets/images/search.png";

const Container = styled.div`
  margin: 8px;
  padding: 8px 16px;
  border: 1px solid #d94a56;
  border-radius: 24px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchImage = styled.img`
  width: 20px;
  cursor: pointer;
`;

const SearchInputField = styled.input`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: white;
  border: none;
  outline: none;
`;

const SearchBar = ({
  className,
  value = "",
  onChange = () => {},
  onSubmit = () => {},
}) => {
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(value);
    }
  };

  return (
    <Container className={className}>
      <SearchInputField
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search..."
      />
      <SearchImage src={searchImage} alt="" onClick={() => onSubmit(value)} />
    </Container>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchBar;
