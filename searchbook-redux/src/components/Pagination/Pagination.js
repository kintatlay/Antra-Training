import "../../css/Pagination.css";

const Pagination = ({children, currentPage, totalItems, handleChangePage, itemsPerPage}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const handleClickPrev = () => {
        if (currentPage <= 1) {
            return;
        }
        handleChangePage(currentPage - 1);
    }

    const handleClickNext = () => {
        if (currentPage >= totalPages) {
            return;
        }
        handleChangePage(currentPage + 1);
    }

    return (
        <div className="pagination__container">
            {children}
            <div className="button-set">
                {totalPages > 1 && <>
                    <button disabled={currentPage <= 1} onClick={handleClickPrev}>Prev</button>
                    <span>{currentPage}</span>
                    <button disabled={currentPage >= totalPages} onClick={handleClickNext}>Next</button>
                </>}
            </div>
        </div>
    )
}

export default Pagination;