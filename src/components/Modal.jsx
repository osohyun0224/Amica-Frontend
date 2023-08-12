import styled from "styled-components";
import PropTypes from "prop-types";

import SimpleBar from "simplebar-react";

import { hide, selectVisible } from "../redux/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";

const Background = styled(SimpleBar)`
  max-width: 500px;
  width: 100%;
  height: calc(var(--vh) * 100);
  top: 0;
  z-index: 99;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  overflow-x: hidden;
  overflow-y: auto;

  transition: opacity 0.25s;

  & .simplebar-content {
    display: flex;
    justify-content: center;
  }

  &.locked {
    visibility: hidden;
  }

  &.hidden {
    opacity: 0;
  }
`;

const Content = styled.div`
  max-width: 400px;
  width: 80%;
  min-height: 300px;
  margin: 72px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media (max-width: 360px) {
    max-width: 288px;
    width: calc(100% - 24px);
  }
`;

const Modal = ({ id = "modal", className = "", style = {}, children }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectVisible(id));
  const [interactable, setInteractable] = useState(false);
  const ref = useRef(null);

  const backgroundClass = [
    isVisible ? null : "hidden",
    isVisible || interactable ? null : "locked",
  ].join(" ");

  const onClick = useCallback(
    (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.nodeName.toLowerCase() !== "html"
      ) {
        dispatch(hide(id));
      }
    },
    [ref, dispatch, id],
  );

  useEffect(() => {
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, [onClick]);

  return (
    <Background
      className={backgroundClass}
      onTransitionEnd={() => setInteractable(isVisible)}
    >
      <Content ref={ref} style={style} className={className}>
        {children}
      </Content>
    </Background>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Modal;
