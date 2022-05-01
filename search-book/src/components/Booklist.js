import { useState } from 'react';
import ReactPaginate from "react-paginate";

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
                <li>             
                    <img 
                        src={ele.volumeInfo.imageLinks.thumbnail}
                        alt={ele.volumeInfo.title}
                    />
                    <h2>
                        {ele.volumeInfo.title}
                    </h2>
                    <h4>
                        Publisher: 
                    </h4>
                    <p>
                        {ele.volumeInfo.publisher}
                    </p>
                    <h4>
                        Publish Date: 
                    </h4>
                    <p>
                        {ele.volumeInfo.publishedDate}
                    </p>
                    <h4>
                        Description: 
                    </h4>
                    <p>
                        {ele.volumeInfo.description}
                    </p>
                    
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

    // const data = bookData.map((ele) => 
    //     {
    //         return ele.volumeInfo.imageLinks === undefined ?
    //         null : 
    //         <a key={ele.id} onClick={() => addWishList(ele.id)}>
    //         <li>             
    //             <img 
    //                 src={ele.volumeInfo.imageLinks.thumbnail}
    //                 alt={ele.volumeInfo.title}
    //             />
    //             <h2>
    //                 {ele.volumeInfo.title}
    //             </h2>
    //             <h4>
    //                 Publisher: 
    //             </h4>
    //             <p>
    //                 {ele.volumeInfo.publisher}
    //             </p>
    //             <h4>
    //                 Publish Date: 
    //             </h4>
    //             <p>
    //                 {ele.volumeInfo.publishedDate}
    //             </p>
    //             <h4>
    //                 Description: 
    //             </h4>
    //             <p>
    //                 {ele.volumeInfo.description}
    //             </p>
                
    //         </li>
    //         </a>
    //     }
    // )
    const pageCount = Math.ceil(bookData.length / usersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <ul>
            {displayBookList}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </ul>
    )
}
