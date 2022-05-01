import React from 'react'

export default function Wishlist({ wishList, setWishlist }) {
    
    const handleDelete = (id) => {
        const remainingList = wishList.filter(book => book.id !== id);
        setWishlist(remainingList);
    }

    const data = [];

    if (wishList.length > 0) {
        wishList.map((book) => {
            data.push(<li key={book.id}>
                <h2>{book.title}</h2>
                <button onClick={() => handleDelete(book.id)}>X</button>
            </li>)
        })
    } 

    return (
        <ul>
            {data}
        </ul>
    )
}