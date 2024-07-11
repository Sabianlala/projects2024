import React from "react";

const DeleteForm = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p style={{color: 'red'}}>Are you sure that you want to delete this book?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
