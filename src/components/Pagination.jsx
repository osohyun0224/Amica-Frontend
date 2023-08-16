import { useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import leftArrow from "../assets/images/Page-left.png";
import rightArrow from "../assets/images/Page-right.png";

const StyledPaginateContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

const StyledArrow = styled.img`
  height: 16px;
  vertical-align: middle;
`;

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 8px;

  .page-link {
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 13px;
    text-align: center;
    color: rgba(102, 112, 128, 1);
    cursor: pointer;
  }

  .active-link {
    color: rgba(217, 74, 86, 1);
    font-weight: 800;
  }
`;

function Pagination({ totalItems, itemsPerPage, onChange }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);

    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <StyledPaginateContainer>
      <StyledReactPaginate
        previousLabel={<StyledArrow src={leftArrow} alt="Prev" />}
        nextLabel={<StyledArrow src={rightArrow} alt="Next" />}
        breakLabel="..."
        pageCount={totalItems / itemsPerPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName="active"
        forcePage={currentPage}
        pageClassName="page"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeLinkClassName="active-link"
      />
    </StyledPaginateContainer>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

export default Pagination;
