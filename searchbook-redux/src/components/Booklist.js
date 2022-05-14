import BookDetail from './BookDetail';

const Booklist = ({items}) => {

    return (
        <ul>
            {items.map(ele => 
                <BookDetail key={ele.id} ele={ele} />
            )}
        </ul>
    )
}

export default Booklist;