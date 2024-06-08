import React, { useState } from 'react';

const Card = ({ image, name, origin, description }) => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="col-md-4 mb-4">
      <div className="card" onClick={() => setPopup(true)}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{origin}</p>
        </div>
      </div>
      {popup && (
        <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{name}</h5>
                <button type="button" className="close" onClick={() => setPopup(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <p><strong>Origin:</strong> {origin}</p>
                <p>{description}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={() => setPopup(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;