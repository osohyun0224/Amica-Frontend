import styled from "styled-components";

const DropdownContainer = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    list-style-type: none;
    padding: 10px 0;
    overflow: scroll;
`;

const DropdownList = styled.li`
    display: flex;
    padding: 6px 16px;
    cursor: pointer;
`;

const ProductOptions = [
    { id: 0, productName: "모래 6kg" },
    { id: 1, productName: "모래 7kg" },
    { id: 2, productName: "모래 8kg" },
    { id: 3, productName: "모래 9kg" },
];
const Dropdown = () => {
    const optionClick = () => {

    }

    return (
        <DropdownContainer>
            {(ProductOptions.map((option) => (
                <DropdownList> { option.productName } </DropdownList>
            )))}
        </DropdownContainer>
    )
}

export default Dropdown;