import { useState, useEffect } from 'react';
import { searchbook } from './apis/searchbook';
import Booklist from './Booklist';

import SearchBar from './SearchBar';

const Home = () => {
    const [items, setItems] = useState([]);

    const handleSubmit = async (input) => {
        const searchResult = await searchbook(input, 1, 40);
        setItems(searchResult);
    }

    return (
        <>
            <SearchBar handleSubmit={handleSubmit} />
            <Booklist items={items} />
        </>
    )
}

export default Home;