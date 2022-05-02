import { useState } from 'react';
import ReactPaginate from "react-paginate";
import "../css/Booklist.css";

export default function Booklist({ bookData, wishList, setWishlist }) {

    const [pageNumber, setPageNumber] = useState(0);
    
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;

    const displayBookList = bookData
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((ele) => {
            return (
                ele.volumeInfo.imageLinks === undefined ?
                null : 
                <a key={ele.id} onClick={() => addWishList(ele.id)}>
                <li className="booklist__display--book">             
                    <img 
                        className="booklist__display--img"
                        src={ele.volumeInfo.imageLinks.thumbnail}
                        alt={ele.volumeInfo.title}
                    />
                    <aside className="booklist-display--aside">
                        <h2>
                            {ele.volumeInfo.title}
                        </h2>
                        {
                            ele.volumeInfo.publisher ? 
                            <div className="booklist__book--publisher">
                                <h4>
                                    Publisher: &nbsp;
                                </h4>
                                <p>
                                    {ele.volumeInfo.publisher}
                                </p>
                            </div>
                            : null
                        }
                        {
                            ele.volumeInfo.publishedDate ?
                            <div className="booklist__book--publishedDate">
                                <h4>
                                    Publish Date: &nbsp;
                                </h4>
                                <p>
                                    {ele.volumeInfo.publishedDate}
                                </p>
                            </div>
                            : null
                        }
                        {
                            ele.volumeInfo.description ?
                            <div className="booklist__book--description">
                                <h4>Description:</h4>
                                <p>
                                    {ele.volumeInfo.description}
                                </p>
                            </div>
                            : null
                        }

                    </aside>
                </li>
                </a>
            )
        })

    const addWishList = (id) => {
        const existInWishList = wishList.filter(book => book.id === id);
        const wishBook = bookData.filter(book => book.id === id);
        const wishBookRelevantData = {
            id : wishBook[0].id,
            title: wishBook[0].volumeInfo.title
        };
        if (existInWishList[0] === undefined) {
            setWishlist([wishBookRelevantData, ...wishList]);
        }
    }

    const pageCount = Math.ceil(bookData.length / usersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <ul className="booklist__display--width">
            {bookData.length === 0 ? <p className="booklist__display--empty">We cannot find any result for your search. Please enter a different book name.</p> : null}
            {displayBookList}
            {bookData.length === 0 ? null : 
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    marginPagesDisplayed={1}
                />
            }

        </ul>
    )
}
