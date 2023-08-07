import styled from "styled-components";
import PropTypes from "prop-types";

const DropdownContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  list-style-type: none;
  padding: 10px 0;
  overflow: scroll;
`;

const DropdownList = styled.li`
  display: flex;
  padding: 6px 16px;
  cursor: pointer;
  width: 100%; // 부모 요소의 너비에 맞춤
  white-space: nowrap; // 내용이 너무 길어도 줄바꿈을 하지 않음
  overflow: hidden; // 내용이 너무 길면 숨김
  text-overflow: ellipsis; // 내용이 너무 길면 말줄임표 사용
`;

const SpeciesOptions = [
  { id: 0, SpeciesName: "고양이" },
  { id: 1, SpeciesName: "강아지" },
  { id: 2, SpeciesName: "햄스터" },
  { id: 3, SpeciesName: "토끼/기니피그" },
  { id: 4, SpeciesName: "파충류" },
  { id: 5, SpeciesName: "관상어" },
  { id: 6, SpeciesName: "고슴도치" },
];

const DropdownSpecies = ({ onSelect }) => { 
  return (
    <DropdownContainer>
      {SpeciesOptions.map((option) => (
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

DropdownSpecies.propTypes = {
  onSelect: PropTypes.func.isRequired, 
};

export default DropdownSpecies;

