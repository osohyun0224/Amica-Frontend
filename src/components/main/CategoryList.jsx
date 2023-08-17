import { styled } from "styled-components";

import ScrollBar from "simplebar-react";

const CategoryList = styled(ScrollBar)`
  padding: 0 5px 6px 5px;
  display: flex;
  flex-wrap: wrap;

  & .simplebar-content {
    display: flex;
    justify-content: space-between;
  }

  & .simplebar-track.simplebar-horizontal {
    width: 70px;
    height: 3px;
    background-color: #eef1f4;
    margin: auto;
    margin-bottom: -8px;
    opacity: 0;
  }

  & .simplebar-scrollbar:before {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(217, 74, 86, 1);
    border-radius: 0;
  }
`;

export default CategoryList;