import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";
const Paginations = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <>
      {pageNumbers.map((number) => (
        // <Pagination>
        //   <Pagination.Item
        //     onClick={() => paginate(number)}
        //     style={{
        //       margin: 4,
        //       backgroundColor: number === currentPage ? "red" : "",
        //     }}
        //   >
        //     {number}
        //   </Pagination.Item>
        // </Pagination>
        <div
          style={{
            backgroundColor: number === currentPage ? "#0F75BC" : "",
            color: number === currentPage ? "#FFFFFF" : "",
          }}
          className="pagination-item"
          onClick={() => paginate(number)}
        >
          {number}
        </div>
      ))}
    </>
  );
};

export default Paginations;
