import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Create = ({ list, setList }) => {
  const [item, setItem] = useState({
    name: '',
    author: '',
    image: '',
    price: 0,
    id: uuidv4(),
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.name || !item.author || !item.image || !item.price) {
      let newErrors = {};
      if (!item.name) {
        newErrors.name = 'Name is required';
      }
      if (!item.author) {
        newErrors.author = 'Author is required';
      }
      if (!item.image) {
        newErrors.image = 'Image URL is required';
      }
      if (!item.price) {
        newErrors.price = 'Price is required';
      }
      setErrors(newErrors);
      return;
    }

    setList([item, ...list]);
    navigate('/manager');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <div className="container border border-primary mt-5 mb-2">
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={item.id} 
            readOnly 
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className={`form-control ${errors.author ? 'is-invalid' : ''}`}
            id="author"
            name="author"
            value={item.author}
            onChange={handleChange}
          />
          {errors.author && <div className="invalid-feedback">{errors.author}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className={`form-control ${errors.image ? 'is-invalid' : ''}`}
            id="image"
            name="image"
            value={item.image}
            onChange={handleChange}
          />
          {errors.image && <div className="invalid-feedback">{errors.image}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
          />
          {errors.price && <div className="invalid-feedback">{errors.price}</div>}
        </div>
        <div className="d-flex justify-content-center mt-2 mb-2">
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
