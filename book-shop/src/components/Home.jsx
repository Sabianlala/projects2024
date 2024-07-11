import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container mt-5">
    <div className="jumbotron text-center text-dark" style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '600px', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#000', 
      padding: '50px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    }}>
      <h1 className="display-4 fw-bold mb-4">Welcome to the Book Management Application</h1>
      <p className="lead">Discover a world of books at our bookstore</p>
      <hr className="my-4" style={{ borderColor: '#000', width: '50px' }} />
      <Link className="btn btn-outline-dark btn-lg" to="/books" role="button">Explore Books</Link>
    </div>
  </div>
);

export default Home;



