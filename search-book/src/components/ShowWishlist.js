import React from 'react';
import '../css/ShowWishlist.css';

export default function ShowWishlist({wishList}) {

    const data = [];
    const getWishlistData = () => {
        if (wishList.length > 0) {
            wishList.map((book) => {
                data.push(<li key={book.id} className="wishlist__list--style">
                    <h4>{book.title}</h4>
                </li>)
            })
        }
        return data;
    }

    return (
        <section className="section__show-wishlist">
            <h2>Wish List</h2>
            <ul>
                {wishList.length > 0 
                ? 
                getWishlistData()
                :
                <p className="wishlist__content--empty">Your Wish List is currently empty.</p>}
            </ul>
        </section>
    )
}