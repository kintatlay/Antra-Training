import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './components/NavBar';
import Home from './components/Home';
import ShowWishlist from './components/ShowWishlist';
import './App.css';

function App() {

  const [bookData, setBookData] = useState([]);

  const [wishList, setWishlist] = useState([]);

  return (
    <BrowserRouter>
    {console.log(bookData)}
      <Navbar />
      <Routes>
        <Route exact path="/home" 
          element={<Home 
            wishList={wishList}
            setWishlist={setWishlist}
            bookData={bookData}
            setBookData={setBookData}
            />} 
        />
        <Route exact path="/show-wishlist" 
          element={<ShowWishlist 
            wishList={wishList}
          />} 
        />
        <Route path="*" element={<Navigate to="/home" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
