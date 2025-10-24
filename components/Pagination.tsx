import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    baseUrl?: string;
    showFirstLast?: boolean;
    maxVisiblePages?: number;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    baseUrl,
    showFirstLast = true,
    maxVisiblePages = 5,
}: PaginationProps) {
    // Don't render if there's only one page or no pages
    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is less than max visible
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Calculate start and end pages
            let startPage = Math.max(
                1,
                currentPage - Math.floor(maxVisiblePages / 2)
            );
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            // Adjust start page if we're near the end
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            // Add first page and ellipsis if needed
            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) {
                    pages.push("...");
                }
            }

            // Add visible pages
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Add ellipsis and last page if needed
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pages.push("...");
                }
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    const handlePageClick = (page: number | string) => {
        if (typeof page === "number") {
            onPageChange(page);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handleFirstClick = () => {
        onPageChange(1);
    };

    const handleLastClick = () => {
        onPageChange(totalPages);
    };

    return (
        <div className='pagination-wrapper'>
            <nav className='pagination-nav' aria-label='Pagination'>
                <ul className='pagination-list'>
                    {/* First page button */}
                    {showFirstLast && currentPage > 1 && (
                        <li className='pagination-item'>
                            <button
                                className='pagination-btn pagination-btn--first'
                                onClick={handleFirstClick}
                                aria-label='Go to first page'
                            >
                                <i className='fas fa-angle-double-left'></i>
                            </button>
                        </li>
                    )}

                    {/* Previous button */}
                    <li className='pagination-item'>
                        <button
                            className={`pagination-btn pagination-btn--prev ${
                                currentPage === 1 ? "disabled" : ""
                            }`}
                            onClick={handlePrevClick}
                            disabled={currentPage === 1}
                            aria-label='Go to previous page'
                        >
                            <i className='fas fa-angle-left'></i>
                        </button>
                    </li>

                    {/* Page numbers */}
                    {visiblePages.map((page, index) => (
                        <li key={index} className='pagination-item'>
                            {typeof page === "number" ? (
                                <button
                                    className={`pagination-btn pagination-btn--number ${
                                        page === currentPage ? "active" : ""
                                    }`}
                                    onClick={() => handlePageClick(page)}
                                    aria-label={`Go to page ${page}`}
                                    aria-current={
                                        page === currentPage
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {page}
                                </button>
                            ) : (
                                <span className='pagination-ellipsis'>...</span>
                            )}
                        </li>
                    ))}

                    {/* Next button */}
                    <li className='pagination-item'>
                        <button
                            className={`pagination-btn pagination-btn--next ${
                                currentPage === totalPages ? "disabled" : ""
                            }`}
                            onClick={handleNextClick}
                            disabled={currentPage === totalPages}
                            aria-label='Go to next page'
                        >
                            <i className='fas fa-angle-right'></i>
                        </button>
                    </li>

                    {/* Last page button */}
                    {showFirstLast && currentPage < totalPages && (
                        <li className='pagination-item'>
                            <button
                                className='pagination-btn pagination-btn--last'
                                onClick={handleLastClick}
                                aria-label='Go to last page'
                            >
                                <i className='fas fa-angle-double-right'></i>
                            </button>
                        </li>
                    )}
                </ul>

                {/* Page info */}
                <div className='pagination-info'>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                </div>
            </nav>
        </div>
    );
}
