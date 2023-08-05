import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import leftArrow from '../assets/images/Page-left.png';
import rightArrow from '../assets/images/Page-right.png';


const StyledPaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const StyledArrow = styled.img`
  height: 12px;
  vertical-align: middle;
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
      <ReactPaginate
        previousLabel={<StyledArrow src={leftArrow} alt="Prev" />}
        nextLabel={<StyledArrow src={rightArrow} alt="Next" />}
        breakLabel={"..."}
        pageCount={totalItems / itemsPerPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
        pageClassName={"page"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeLinkClassName={"active-link"}
      />
    </StyledPaginateContainer>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

export default Pagination;