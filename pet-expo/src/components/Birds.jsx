import React from 'react';
import Navbar from './Navbar';
import FetchData from './FetchData';
import Footer from './Footer'

const Birds = () => {
  return (
    <div>
    <Navbar/>
    <FetchData type="birds" />
    <Footer/>
    </div>
  );
}

export default Birds;
