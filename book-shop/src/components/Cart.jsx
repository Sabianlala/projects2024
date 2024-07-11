import React, { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  useEffect(() => {
    const updatedItems = cartItems.map((item) => {
      if (!item.quantity) {
        return { ...item, quantity: 1 };
      }
      return item;
    });
    setItems(updatedItems);
  }, [cartItems]);

  const handleIncrement = (productId) => {
    const updatedItems = items.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };
  
  const handleDecrement = (productId) => {
    const updatedItems = items.map((item) => {
      if (item.id === productId) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity === 0) {
          return null;
        }
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    const filteredItems = updatedItems.filter((item) => item !== null);
    setItems(filteredItems);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-4">
      <div className="cart-container">
        <h1 className="text-center mb-4"><AiOutlineShoppingCart /> Your Cart</h1>
        {items.length === 0 ? (
          <h3 className="text-center text-muted">Your cart is empty.</h3>
        ) : (
          <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
              {items.map((item) => (
                <div className="col mb-4" key={item.id}>
                  <div className="card h-100 shadow">
                    <img 
                      src={item.image} 
                      className="card-img-top" 
                      alt={item.name} 
                      style={{ height: '300px', objectFit: 'cover' }} 
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text mb-2">Price: ${item.price}</p>
                      <p className="card-text mb-2">Quantity: {item.quantity}</p>
                      <div className="d-flex justify-content-center align-items-center mt-auto">
                        <button className="btn btn-outline-danger btn-lg me-2" onClick={() => handleDecrement(item.id)}>-</button>
                        <button className="btn btn-outline-success btn-lg ms-2" onClick={() => handleIncrement(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5"></div>
            <div className="total-price-container fixed-bottom bg-primary py-3 px-4 d-flex justify-content-center" style={{ width: '100%', zIndex: 1 }}>
              <h3 className="mb-0">Total: ${getTotalPrice()}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;





