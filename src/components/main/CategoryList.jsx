import { styled } from "styled-components";

import ScrollBar from "simplebar-react";

const CategoryList = styled(ScrollBar)`
  padding: 0px; 5px 15px 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 20px;

  & .simplebar-content {
    display: flex;
  }

  & .simplebar-track.simplebar-horizontal {
    width: 70px;
    height: 3px;
    background-color: #eef1f4;
    margin: auto;
    margin-bottom: -8px;
  }

  & .simplebar-scrollbar:before {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(217, 74, 86, 1);
    border-radius: 0;
    opacity: 1;
  }
`;

export default CategoryList;
