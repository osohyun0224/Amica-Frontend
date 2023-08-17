import styled from "styled-components";

const Kind = styled.p`
    display: flex;
    flex-direction: row;
    max-width: max-content;
    height: 26px;
    font-size: 12px;
    color: #F2B366;
    line-height: 22px;
    text-align: center;
    background-color: #FCECD9;
    gap: 10px;
    padding: 2px 6px;
    margin: 5px 0 9px 5px;
    border-radius: 5px;
    position: relative;
    bottom: 195px;
`;

const ProductType = ({ type, ...props }) => {
    return (
        <Kind {...props}> {type} </Kind>
    )
}
export default ProductType;