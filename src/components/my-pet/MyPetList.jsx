import { styled } from "styled-components";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const MyPetList = styled(SimpleBar)`
  padding-bottom: 6px;
  margin-bottom: 16px;
  margin-top: 0px;


  & .simplebar-content {
    display: flex;
  }

  & .simplebar-track.simplebar-horizontal {
    margin: auto;
    margin-bottom: -8px;
    padding: 0;
    width: 70px;
    height: 3px;
    background: rgba(238, 241, 244, 1);
    margin-top: -100px;
  }

  & .simplebar-scrollbar:before {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    background: rgba(217, 74, 86, 1);
    opacity: 1;
  }
`;

export default MyPetList;
