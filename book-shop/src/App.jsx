// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Edit from './components/Edit';
import Create from './components/Create';
import ChangeTheme from './components/ChangeTheme';
import { data } from './data';

const App = () => {

  const [list,setList] = useState(data);
  const [cartItems , setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <Navbar/>
        <ChangeTheme/>
        <Routes> 
          <Route exact path="/" element={<Home/>} />
          <Route path="/books" element={<BookList list={list} cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/manager" element={<Manager list={list} setList={setList}/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/edit/:id" element={<Edit list={list} setList={setList}/>} />
          <Route path="/create" element={<Create list={list} setList={setList}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
