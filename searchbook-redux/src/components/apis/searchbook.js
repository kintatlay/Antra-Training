import axios from 'axios';

export function searchbook(searchName, currentPage, itemsPerPage) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchName}+intitle&startIndex=${(currentPage-1)*itemsPerPage}&maxResults=${itemsPerPage}`)
        .then(res =>
            {console.log(res) 
            return res})
}