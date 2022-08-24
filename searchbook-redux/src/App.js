import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './components/NavBar';
import './css/App.css';
import Home from './components/Home';

function App() {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')||"[]"));

  useEffect(()=>{
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  },[wishlist])

  const handleAddWishlistCart = (book) => {
    setWishlist(prev => {
      const bookMap = {}
      const nextWishlist = [book, ...prev];
      nextWishlist.forEach(book => {
        bookMap[book.id] = book
      })
      return Object.values(bookMap);
    });
  }

  const handleDeleteWishlist = (id) => {
    setWishlist(prev => {
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={
            <Home 
              handleAddWishlistCart={handleAddWishlistCart}
              handleDeleteWishlist={handleDeleteWishlist}
              wishlist={wishlist} 
            />}
          />
        <Route exact path="/show-wishlist" />
        <Route path="*" element={<Navigate to="/home" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
