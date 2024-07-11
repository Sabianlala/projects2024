import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteForm from "./DeleteForm"; 

const Manager = ({ list, setList }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteForm, setShowDeleteForm] = useState(false); 
  const [deleteItemId, setDeleteItemId] = useState(null); 
  const booksPerPage = 12; 

  const totalPages = Math.ceil(list.length / booksPerPage);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    setDeleteItemId(id);
    setShowDeleteForm(true);
  };

  const handleCreate = () => {
    navigate("/create");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const confirmDelete = () => {
    const newList = list.filter((item) => item.id !== deleteItemId);
    setList(newList);
    setShowDeleteForm(false);
  };

  const cancelDelete = () => {
    setDeleteItemId(null);
    setShowDeleteForm(false);
  };

  const getCurrentBooks = () => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return list.slice(startIndex, endIndex);
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
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
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
        className={`page-item ${
          currentPage === totalPages ? "active" : ""
        }`}
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Manager
          </a>
          <button
            onClick={handleCreate}
            className="btn btn-light btn-lg ms-auto"
          >
            Create New
          </button>
        </div>
      </nav>
      <div className="row">
        {getCurrentBooks().map((item) => (
          <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top img-fluid rounded"
                alt={item.name}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.author}
                </h6>
                <p className="card-text mt-auto">${item.price}</p>
              </div>
              <div className="card-footer bg-transparent border-top-0 d-flex justify-content-center">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="btn btn-primary btn-lg me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-lg ms-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav
        className="navbar navbar-light bg-light"
        style={{ position: "sticky", bottom: 0, zIndex: 1000 }}
      >
        <ul className="pagination justify-content-center mx-auto my-2">
          {generatePagination()}
        </ul>
      </nav>
      {showDeleteForm && (
        <DeleteForm
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Manager;


