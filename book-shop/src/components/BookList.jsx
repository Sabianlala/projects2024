import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddToCartForm from './AddToCartForm';

const BookList = ({ list, cartItems, setCartItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const booksPerPage = 20;
  const totalPages = Math.ceil(list.length / booksPerPage);

  const getCurrentBooks = () => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return list.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAdd = (product) => {
    const existingCartItem = cartItems.find((item) => item.name === product.name);
    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const generatePagination = () => {
    let items = [];
    const maxVisiblePages = 3;

    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      items.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    if (totalPages > maxVisiblePages) {
      items.push(
        <li key="ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }

    items.push(
      <li
        key={totalPages}
        className={`page-item ${currentPage === totalPages ? 'active' : ''}`}
      >
        <button
          className="page-link"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      </li>
    );

    return items;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12" style={{ paddingBottom: '100px' }}>
          <div className="row">
            {getCurrentBooks().map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <Card
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  author={item.author}
                  handleAdd={() => handleAdd(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddToCartForm show={showSuccessMessage} />
      <nav className="navbar fixed-bottom navbar-light bg-light mx-auto my-2" style={{ zIndex: 1 }}>
        <ul className="pagination justify-content-center mx-auto">
          {generatePagination()}
        </ul>
      </nav>
    </div>
  );
};

export default BookList;
