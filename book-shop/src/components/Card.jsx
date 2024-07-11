import React from 'react';

const Card = ({ image, price, name, author, handleAdd }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={name} style={{ height: "300px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary btn-block" onClick={() => handleAdd({ name, price, image })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
