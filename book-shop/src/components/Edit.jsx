import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = ({ list, setList }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    image: "",
    price: 0,
    author: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const selectedItem = list.find((item) => item.id === id);
    if (selectedItem) {
      setItem(selectedItem);
    }
  }, [list, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.name || !item.author || !item.image || !item.price) {
      let newErrors = {};
      if (!item.name) {
        newErrors.name = "Name is required";
      }
      if (!item.author) {
        newErrors.author = "Author is required";
      }
      if (!item.image) {
        newErrors.image = "Image URL is required";
      }
      if (!item.price) {
        newErrors.price = "Price is required";
      }
      setErrors(newErrors);
      return;
    }

    const updatedList = list.map((product) =>
      product.id === id ? item : product
    );
    setList(updatedList);
    navigate("/manager");
  };

  return (
    <div className="container border border-primary mt-5 mb-2">
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className={`form-control ${errors.author ? "is-invalid" : ""}`}
            id="author"
            name="author"
            value={item.author}
            onChange={(e) => setItem({ ...item, author: e.target.value })}
          />
          {errors.author && (
            <div className="invalid-feedback">{errors.author}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
            id="image"
            name="image"
            value={item.image}
            onChange={(e) => setItem({ ...item, image: e.target.value })}
          />
          {errors.image && (
            <div className="invalid-feedback">{errors.image}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            id="price"
            name="price"
            value={item.price}
            onChange={(e) => setItem({ ...item, price: e.target.value })}
          />
          {errors.price && (
            <div className="invalid-feedback">{errors.price}</div>
          )}
        </div>
        <div className="d-flex justify-content-center mt-2 mb-2">
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
