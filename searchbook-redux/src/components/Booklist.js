import BookDetail from './BookDetail';
import '../css/Booklist.css';

const Booklist = ({items, handleAddWishlistCart}) => {

    return (
        <ul className="booklist__display--list">
            {items.length>0
                ?
            items.map(ele => 
                <BookDetail key={ele.id} ele={ele} handleAddWishlistCart={handleAddWishlistCart} />
            )
                :
            <p className="booklist__content--empty">Type a book name in the search box to view available books.</p>
            }
        </ul>
    )
}

export default Booklist;