import { useState } from 'react';
import SearchBar from './SearchBar';
import Booklist from './Booklist';
import Wishlist from './Wishlist';
import '../css/Home.css';

export default function Home({ wishList, setWishlist, bookData, setBookData }) {

  return (
    <div>
      <SearchBar 
        setBookData={setBookData}
      />
      <section className="home__section">
        <Booklist 
          bookData={bookData}
          wishList={wishList}
          setWishlist={setWishlist}
        />
        <Wishlist 
          wishList={wishList}
          setWishlist={setWishlist}
        />
      </section>
    </div>
  )
}
