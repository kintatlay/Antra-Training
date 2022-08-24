import { useState, useEffect } from 'react';
import { searchbook } from './apis/searchbook';
import Booklist from './Booklist';
import WishlistCart from './WishlistCart';
import "../css/Home.css";
import SearchBar from './SearchBar';
import Pagination from './Pagination/Pagination';
import { MdSettingsInputAntenna } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchResult, updateTotalItems } from "../redux/slices/searchbookSlice";

const Home = ({handleDeleteWishlist, wishlist, handleAddWishlistCart}) => {
    // const [items, setItems] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    // const [keyword, setKeyWord] = useState("");
    const dispatch = useDispatch();

    const items = useSelector(state => state.searchbookSlice.searchResult);
    const keyword = useSelector(state => state.searchbookSlice.keyword);
    const currentPage = useSelector(state => state.searchbookSlice.currentPage);
    const totalItems = useSelector(state => state.searchbookSlice.totalItems);


    useEffect(() => {
        (async()=>{
            if (keyword === "") return
            const result = await searchbook(keyword, currentPage, itemsPerPage);
            if (result?.data?.totalItems !== undefined) {
                // setTotalItems(result.data.totalItems);
                dispatch(updateTotalItems(result.data.totalItems));
            }
            if (result?.data?.items !== undefined) {
                // setItems(searchResult.data.items);
                dispatch(loadSearchResult(result.data.items))
            }
            window.scrollTo(0,0);
        })()
    }, [currentPage, keyword])

    // const handleSubmit = async (input) => {
    //     setKeyWord(input);
    //     setCurrentPage(1);
    // }

    // const handleChangePage = (targetPageNum) => {
    //     setCurrentPage(targetPageNum);
    // }

    return (
        <>
            <SearchBar handleSubmit={handleSubmit} />
            <div className="searchInfo">
                <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={totalItems} handleChangePage={handleChangePage}>
                    <Booklist 
                        items={items}
                        handleAddWishlistCart={handleAddWishlistCart}
                    />
                </Pagination>
                <WishlistCart 
                    handleDeleteWishlist={handleDeleteWishlist} 
                    wishlist={wishlist} 
                />
            </div>
        </>
    )
}

export default Home;