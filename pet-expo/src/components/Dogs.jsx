import React from 'react';
import Navbar from './Navbar';
import FetchData from './FetchData';
import Footer from './Footer'

const Dogs = () => {
  return (
    <div>
      <Navbar/>
      <FetchData type="dogs" />
      <Footer/>
    </div>
  );
}

export default Dogs;
