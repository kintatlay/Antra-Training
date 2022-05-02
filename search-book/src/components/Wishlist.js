import React from 'react'
import "../css/Wishlist.css";
import { MdDeleteForever } from 'react-icons/md';

export default function Wishlist({ wishList, setWishlist }) {
    
    const handleDelete = (id) => {
        const remainingList = wishList.filter(book => book.id !== id);
        setWishlist(remainingList);
    }

    const data = [];
    const getWishlistData = () => {
        if (wishList.length > 0) {
            wishList.map((book) => {
                data.push(<li key={book.id} className="wishlist__list--style">
                    <h4 className="wishlist__title--center">{book.title}</h4>
                    <button onClick={() => handleDelete(book.id)}><MdDeleteForever color="white" size={'2em'} /></button>
                </li>)
            })
        }
        return data;
    }

    return (
        <section className="section__wishlist">
            <div>
                <h2>Wish List</h2>
                <h3>My WishList Items ({wishList.length})</h3>
            </div>
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