import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import Navbar from './components/NavBar';
import './css/App.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    {/* {console.log(bookData)} */}
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/show-wishlist" />
        <Route path="*" element={<Navigate to="/home" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
