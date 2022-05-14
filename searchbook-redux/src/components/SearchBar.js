import { useEffect, useState, useCallback } from 'react';
import '../css/SearchBar.css';
import _ from 'lodash';

const SearchBar = ({handleSubmit}) => {

    const [searchName, setSearchName] = useState("");

    const cachedDebouncedFn = useCallback(_.debounce(handleSubmit, 1500),[handleSubmit]);

    useEffect(() => {
        if (searchName !== "") {
            cachedDebouncedFn(searchName);
        }
    }, [searchName])

    const handleChange = async (e) => {
        setSearchName(pre=> {
            return e.target.value});
    } 

    const handleClick = (e) => {
        e.preventDefault();
        handleSubmit(searchName);
    }

    return (
        <form className="searchBar__form">
            <div className="searchBar__wrapper">
                <div className="searchBar__input-data">
                    <input
                        required
                        className="search__input-text"
                        type="text" 
                        value={searchName}
                        onChange={handleChange}
                    />
                    <label>Search ...</label>
                </div>
            </div>
            <button className="searchBar__submit--btn" onClick={handleClick}>Enter</button>
        </form>
    )
}

export default SearchBar;