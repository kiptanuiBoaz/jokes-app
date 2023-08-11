import React, { useState } from 'react';
import './pagination.scss';
import { useSelector, useDispatch } from "react-redux";
import {  PaginationStateInterface } from '../../types/types';
import { NAVIGATE_PAGE, UPDATE_ITEMS_PER_PAGE, selectPagination } from '../../redux/paginatinSlice';


export const Pagination: React.FC = () => {
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);

    const pagesToShow = 3;
    const {pagination:{limit,page:currentPage}} = useSelector(selectPagination);

    const dispatch = useDispatch();

    const totalPages = Math.ceil(30 / limit);
    const pageNumbers = Array.from({ length: pagesToShow }, (_, index) => currentPage - 1 + index);
console.log(currentPage);
    return (
        <div className="pagination">
            <button
                className="pagination-button"
                disabled={currentPage === 1}
                onClick={() => dispatch(NAVIGATE_PAGE({page:"prev"}))}
            >
                &lt; Back
            </button>

            <div className="page-numbers">
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
                        onClick={() => dispatch(NAVIGATE_PAGE({page:pageNumber }))}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>

            <button
                className="pagination-button"
                disabled={currentPage === totalPages}
                    onClick={() => dispatch(NAVIGATE_PAGE({page:"next"}))}
            >
                Next &gt;
            </button>

            <div className="items-per-page">
                <label>Items per page:</label>
                <select
                    value={itemsPerPage}
                    onChange={(e) => dispatch(UPDATE_ITEMS_PER_PAGE(
                        { limit: (Number(e.target.value)) }
                    ))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
            </div>
        </div >
    );
};


