import styled from "styled-components";
import { useRef, useState } from "react";

import Select from "../Select.jsx";
import Modal from "../Modal.jsx";
import { useDispatch } from "react-redux";
import { hide } from "../../redux/modalSlice.js";
import { petGender, petSizes, petSpecies } from "../../librarys/data.js";
import { filterNumber } from "../../librarys/util.js";
import { createPet } from "../../librarys/pet-api.js";
import { useContext } from "react";
import { DispatchContext } from "../../librarys/context.js";

const Preview = styled.div`
  width: 128px;
  height: 128px;
  padding: 2px;
  border-radius: 5px;
  border: 1.5px solid #f2d335;
  align-self: center;
  text-align: center;
  font-size: 12px;
  color: rgba(102, 112, 128, 1);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageInput = styled.input`
  display: none;
`;

const Container = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  width: 100%;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: rgba(248, 248, 248, 1);

  &::placeholder {
    color: rgba(21, 21, 21, 0.3);
  }
`;

const AgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > input {
    text-align: right;
    flex-grow: 1;
    flex-shrink: 1;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

const CoverButton = styled.button`
  width: 100%;
  padding: 18px 0;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: rgba(217, 74, 86, 1);

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(217, 74, 86, 0.85);
  }

  cursor: pointer;
`;

const id = "add_pet";

function createSelectList(list) {
  return list.map((item) => ({
    id: item.id,
    name: item.title,
  }));
}

const speciesList = createSelectList(petSpecies);
const sizeList = createSelectList(petSizes);
const genderList = createSelectList(petGender);

const MyPetInputModal = () => {
  const dispatch = useContext(DispatchContext);
  const modalDispatch = useDispatch();
  const inputRef = useRef();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState(speciesList[0].id);
  const [size, setSize] = useState(sizeList[0].id);
  const [gender, setGender] = useState(genderList[0].id);
  const [age, setAge] = useState("");

  function openUpload() {
    if (inputRef) {
      inputRef.current.click();
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function clear(value) {
    if (value) {
      setImage(null);
      setName("");
      setSpecies(speciesList[0].id);
      setSize(sizeList[0].id);
      setGender(genderList[0].id);
      setAge("");
    }
  }

  async function complete() {
    if (name.length < 1) {
      alert("이름을 작성하세요.");
      return;
    }

    const result = await createPet({
      name,
      species,
      size,
      image,
      age: Number(age),
      tags: [],
      gender,
    });

    if (result) {
      dispatch({
        type: "reload",
      });
      modalDispatch(hide(id));
    } else {
      alert("오류 발생 -- 펫이 등록되지 못했습니다.");
      return;
    }
  }

  return (
    <Modal id={id} onToggle={clear}>
      <Container>
        <ImageInput
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <Title>추가하기</Title>
        <Preview onClick={openUpload}>
          {image ? (
            <Image src={image} />
          ) : (
            <p>
              이미지를 <br />
              추가해주세요
            </p>
          )}
        </Preview>
        <Text>이름</Text>
        <Input
          type="text"
          placeholder="멍멍이"
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        <Grid>
          <Item>
            <Text>종</Text>
            <Select
              list={createSelectList(petSpecies)}
              value={species}
              outline={true}
              onSelect={(item) => setSpecies(item.id)}
            />
          </Item>
          <Item>
            <Text>크기</Text>
            <Select
              list={createSelectList(petSizes)}
              value={size}
              outline={true}
              onSelect={(item) => setSize(item.id)}
            />
          </Item>
          <Item>
            <Text>성별</Text>
            <Select
              list={createSelectList(petGender)}
              value={gender}
              outline={true}
              onSelect={(item) => setGender(item.id)}
            />
          </Item>
          <Item>
            <Text>나이</Text>
            <AgeContainer>
              <Input
                type="text"
                size="1"
                placeholder="3"
                value={age}
                onInput={filterNumber(setAge)}
              />
            </AgeContainer>
          </Item>
        </Grid>
      </Container>
      <CoverButton onClick={complete}>확인</CoverButton>
    </Modal>
  );
};

export default MyPetInputModal;
