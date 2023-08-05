import { styled } from "styled-components";

import ScrollBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const CategoryList = styled(ScrollBar)`
    padding: 0 5px 6px 5px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & .simplebar-content {
        display: flex;
    }

    & .simplebar-track.simplebar-horizontal {
        width: 70px;
        height: 3px;
        background-color: #EEF1F4;
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