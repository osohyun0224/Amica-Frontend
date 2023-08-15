import styled from "styled-components";
import PropTypes from "prop-types";

import CheckImage from "../../assets/images/check.svg";
import { useContext } from "react";
import { DispatchContext, StateContext } from "../../librarys/context";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  margin: 0 24px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Text = styled.p`
  flex-grow: 1;
  color: ${(props) => (props.bold ? "black" : "rgba(102, 112, 128, 1)")};
  font-size: ${(props) => (props.bold ? "14px" : "12px")};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
`;

const View = styled.p`
  border-bottom: 1px solid black;
  font-size: 12px;
`;

const CheckBox = styled.img`
  width: 22px;
  height: 22px;
  padding: 2px;
  border: 2px solid
    ${(props) =>
      props.value ? "rgba(217, 74, 86, 0.8)" : "rgba(102, 112, 128, 1)"};
  border-radius: 50%;
  filter: ${(props) =>
    props.value
      ? "invert(40%) sepia(33%) saturate(5457%) hue-rotate(331deg) brightness(93%) contrast(82%)"
      : "invert(44%) sepia(8%) saturate(893%) hue-rotate(178deg) brightness(93%) contrast(82%)"};
  opacity: ${(props) => (props.value ? "1" : "0.3")};

  transition:
    border 0.1s,
    opacity 0.1s,
    filter 0.1s;
`;

const Check = styled.img`
  margin-left: 3px;
  width: 16px;
  height: 16px;
  filter: ${(props) =>
    props.value
      ? "invert(40%) sepia(33%) saturate(5457%) hue-rotate(331deg) brightness(93%) contrast(82%)"
      : "invert(44%) sepia(8%) saturate(893%) hue-rotate(178deg) brightness(93%) contrast(82%)"};
  opacity: ${(props) => (props.value ? "1" : "0.3")};

  transition:
    opacity 0.1s,
    filter 0.1s;
`;

const Divider = styled.div`
  border: 1px solid black;
`;

const TermsAgreement = ({}) => {
  const { marketing } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [service, setService] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  useEffect(() => {
    dispatch({
      type: "setAgreement",
      payload: service && privacy,
    });
  }, [dispatch, service, privacy]);

  function toggleEveryAgreements() {
    const newValue = !(service && privacy && marketing);
    setService(newValue);
    setPrivacy(newValue);
    dispatch({
      type: "setMarketing",
      payload: newValue,
    });
  }

  return (
    <Container>
      <Item onClick={toggleEveryAgreements}>
        <CheckBox value={service && privacy && marketing} src={CheckImage} />
        <Text bold={true}>전체 약관 동의</Text>
      </Item>
      <Divider />
      <Item onClick={() => setService(!service)}>
        <Check value={service} src={CheckImage} />
        <Text>[필수] 서비스 이용 약관</Text>
        <View
          onClick={(e) => {
            e.stopPropagation();
            window.open("https://www.oss.kr/customerCenter");
          }}
        >
          내용보기
        </View>
      </Item>
      <Item onClick={() => setPrivacy(!privacy)}>
        <Check value={privacy} src={CheckImage} />
        <Text>[필수] 개인정보 수집 및 이용</Text>
        <View
          onClick={(e) => {
            e.stopPropagation();
            window.open("https://www.oss.kr/private");
          }}
        >
          내용보기
        </View>
      </Item>
      <Item
        onClick={() =>
          dispatch({
            type: "setMarketing",
            payload: !marketing,
          })
        }
      >
        <Check value={marketing} src={CheckImage} />
        <Text>[선택] 혜택 및 마케팅 정보 수신 동의</Text>
        <View
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              "https://www.musinsa.com/member/join/agreement/marketing",
            );
          }}
        >
          내용보기
        </View>
      </Item>
    </Container>
  );
};

TermsAgreement.propTypes = {};

export default TermsAgreement;
