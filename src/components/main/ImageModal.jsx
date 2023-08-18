import styled from "styled-components";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

import Modal from "../Modal.jsx";
import { useDispatch } from "react-redux";
import { hide } from "../../redux/modalSlice.js";
import { useNavigate } from "react-router-dom";

const Preview = styled.div`
  width: 200px;
  height: 200px;
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

const Spacer = styled.div`
  min-height: 32px;
`;

const Title = styled.p`
  width: 100%;
  margin: 4px 0;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const CoverButton = styled.button`
  width: 100%;
  padding: 18px 0;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: rgba(217, 74, 86, 1);

  cursor: pointer;

  transition:
    opacity 0.2s,
    background 0.2s;

  &:hover {
    background-color: rgba(217, 74, 86, 0.85);
  }

  &.disabled {
    background-color: rgba(217, 74, 86, 1);
    opacity: 0.5;
    cursor: auto;
  }
`;

const id = "upload_image";

const ImageModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headerRef = useRef();
  const descriptionRef = useRef();
  const [headerImage, setHeaderImage] = useState(null);
  const [descriptionImage, setDescriptionImage] = useState(null);

  const isComplete = headerImage && descriptionImage;

  function openUpload(ref) {
    return () => {
      if (ref) {
        ref.current.click();
      }
    };
  }

  const handleImageChange = (callback) => (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  async function complete() {
    // const result = await createPet({
    //   name,
    //   species,
    //   size,
    //   image,
    //   age: Number(age),
    //   tags: [],
    //   gender,
    // });

    // if (result) {
    //   dispatch({
    //     type: "reload",
    //   });
    //   modalDispatch(hide(id));
    // } else {
    //   alert("오류 발생 -- 펫이 등록되지 못했습니다.");
    //   return;
    if (isComplete) {
      navigate(0);
    }
  }

  function clear(value) {
    if (value) {
      setHeaderImage(null);
      setDescriptionImage(null);
    }
  }

  return (
    <Modal id={id} onToggle={clear}>
      <Container>
        <ImageInput
          ref={headerRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange(setHeaderImage)}
        />
        <ImageInput
          ref={descriptionRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange(setDescriptionImage)}
        />
        <Title>헤더 이미지</Title>
        <Preview onClick={openUpload(headerRef)}>
          {headerImage ? (
            <Image src={headerImage} />
          ) : (
            <p>
              이미지를 <br />
              추가해주세요
            </p>
          )}
        </Preview>
        <Spacer />
        <Title>설명 이미지</Title>
        <Preview onClick={openUpload(descriptionRef)}>
          {descriptionImage ? (
            <Image src={descriptionImage} />
          ) : (
            <p>
              이미지를 <br />
              추가해주세요
            </p>
          )}
        </Preview>
      </Container>
      <CoverButton
        className={isComplete ? null : "disabled"}
        onClick={complete}
      >
        확인
      </CoverButton>
    </Modal>
  );
};

export default ImageModal;
