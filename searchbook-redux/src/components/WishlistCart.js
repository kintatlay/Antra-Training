import { MdDeleteForever } from 'react-icons/md';
import '../css/WishlistCart.css';

const WishlistCart = ({handleDeleteWishlist, wishlist}) => {
    return (
        <section className="section__wishlist">
            <div>
                <h2>Wish List</h2>
                <h3>My WishList Items ({wishlist.length})</h3>
            </div> 
            <ul>
                {wishlist.length > 0 
                ? 
                wishlist.map(book => { return (
                    <li key={book.id} className="wishlist__list--style">
                        <h4 className="wishlist__title--center">{book?.volumeInfo?.title}</h4>
                        <button onClick={() => handleDeleteWishlist(book.id)}><MdDeleteForever color="white" size={'2em'} /></button>
                    </li>)
                })
                :
                <p className="wishlist__content--empty">Your Wish List is currently empty.</p>}
            </ul>
        </section>
    )
}

export default WishlistCart;