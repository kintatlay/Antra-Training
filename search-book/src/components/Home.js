import { useState } from 'react';
import SearchBar from './SearchBar';
import Booklist from './Booklist';
import Wishlist from './Wishlist';

export default function Home({ wishList, setWishlist, bookData, setBookData }) {

  return (
    <div>
      <SearchBar 
        setBookData={setBookData}
      />
      <Booklist 
        bookData={bookData}
        wishList={wishList}
        setWishlist={setWishlist}
      />
      <Wishlist 
        wishList={wishList}
        setWishlist={setWishlist}
      />
    </div>
  )
}
