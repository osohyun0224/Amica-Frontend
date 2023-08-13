import styled from "styled-components";
import PropTypes from "prop-types";

const DropdownContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  list-style-type: none;
  padding: 10px 0;
  font-size: 12px;
  margin-right:10px;
  font-family: Nanum Gothic;
`;

const DropdownList = styled.li`
  display: flex;
  padding: 6px 16px;
  cursor: pointer;
  width: 100%;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: Nanum Gothic;
`;

const SizeOptions = [
  { id: 0, SpeciesName: "남자" },
  { id: 1, SpeciesName: "여자" },
  { id: 2, SpeciesName: "남자(중성화)" },
  { id: 3, SpeciesName: "여자(중성화)" },
];

const DropdownGender = ({ onSelect }) => { 
  return (
    <DropdownContainer>
      {SizeOptions.map((option) => (
        <DropdownList
          key={option.id}
          onClick={() => onSelect(option.SpeciesName)} 
        >
          {option.SpeciesName}
        </DropdownList>
      ))}
    </DropdownContainer>
  );
};

DropdownGender.propTypes = {
  onSelect: PropTypes.func.isRequired, 
};

export default DropdownGender;

