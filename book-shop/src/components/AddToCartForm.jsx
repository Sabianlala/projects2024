import React from 'react';
import { Link } from 'react-router-dom';

const AddToCartForm = ({ show }) => {
  return (
    <div className="position-fixed bottom-0 start-50 translate-middle-x" style={{ display: show ? 'block' : 'none', zIndex: 1000 }}>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        This book is added to cart now.{' '}
        <Link to="/cart" className="alert-link">
          View Cart
        </Link>
        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowSuccessMessage(false)}></button>
      </div>
    </div>
  );
};

export default AddToCartForm;
