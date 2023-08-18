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
  left: calc(50% - 250px);
  z-index: 99;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  overflow-x: hidden;
  overflow-y: auto;

  transition: opacity 0.25s;

  & .simplebar-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.locked {
    visibility: hidden;
  }

  &.hidden {
    opacity: 0;
  }

  @media (max-width: 500px) {
    left: 0;
  }
`;

const Content = styled.div`
  max-width: 400px;
  width: 80%;
  min-height: 240px;
  margin: 72px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 9999;
  @media (max-width: 360px) {
    max-width: 288px;
    width: calc(100% - 24px);
  }
`;

const Modal = ({ id, className, style, children, onToggle }) => {
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
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch(hide(id));
      }
    },
    [ref, dispatch, id],
  );

  useEffect(() => {
    document.addEventListener("mousedown", onClick, true);
    return () => {
      document.removeEventListener("mousedown", onClick, true);
    };
  }, [onClick]);

  useEffect(() => {
    onToggle(isVisible);
  }, [isVisible]);

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
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  onToggle: PropTypes.func,
};

Modal.defaultProps = {
  id: "modal",
  onToggle: () => {},
};

export default Modal;
