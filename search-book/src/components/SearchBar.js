import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function SearchBar({ setBookData }) {

    const [searchName, setSearchName] = useState("");

    const [debounceSearchName] = useDebounce(searchName, 2000);

    useEffect(() => {
        fetchData();
    }, [debounceSearchName])

    const fetchData = async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${debounceSearchName}+intitle&startIndex=0&maxResults=40`);
        const bookData = await response.json();
        setBookData(bookData.items);
    };

    return (
        <>
            <input
                type="text" 
                value={searchName}
                onChange={(e) => {
                    setSearchName(e.target.value);
                }}
                placeholder="Search ..."
            />
        </>
    )
}
