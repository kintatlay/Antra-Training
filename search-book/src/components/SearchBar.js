import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import '../css/SearchBar.css';

export default function SearchBar({ setBookData }) {

    const [searchName, setSearchName] = useState("");

    const [debounceSearchName] = useDebounce(searchName, 2000);

    useEffect(() => {
        fetchData();
    }, [debounceSearchName])

    const fetchData = async () => {
        try{
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${debounceSearchName}+intitle&startIndex=0&maxResults=40`);
            const bookData =await response.json();
            if (bookData.totalItems === 0) {
                setBookData([]);
            } else {
                setBookData(bookData.items);
            }
            console.log(bookData)
        }catch(err) {
            console.log(err)
        }
    };

    return (
        <>
            <div className="searchBar__wrapper">
                <div className="searchBar__input-data">
                    <input
                        required
                        className="search__input-text"
                        type="text" 
                        value={searchName}
                        onChange={(e) => {
                            setSearchName(e.target.value);
                        }}
                    />
                    <label>Search ...</label>
                </div>
            </div>

        </>
    )
}
