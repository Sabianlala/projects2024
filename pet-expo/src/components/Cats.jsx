import React from 'react';
import Navbar from './Navbar';
import FetchData from './FetchData';
import Footer from './Footer'

const Cats = () => {
  return (
    <div>
        <Navbar/>
        <FetchData type="cats" />
        <Footer/>
    </div>
  );
}

export default Cats;
