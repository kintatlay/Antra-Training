import React from 'react'

export default function ShowWishlist({wishList}) {

    const data = [];

    if (wishList.length > 0) {
        wishList.map((book) => {
            data.push(<li key={book.id}>
                <h2>{book.title}</h2>
            </li>)
        })
    }

    return (
        <ul>
            {data}
        </ul>
    )
}