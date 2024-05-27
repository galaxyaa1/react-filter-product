import React, { useState } from 'react';
import './App.css';

const ProductCard = ({ name, image, discount, price, description, sizes, remaining }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} onClick={handleToggleDetails} />
        <div className="discount">{discount}% OFF</div>
        {showDetails && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleToggleDetails}>&times;</span>
              <img src={image} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Sizes: {sizes}</p>
                <p>Remaining: {remaining}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="details">
        <h2>{name}</h2>
        <div className="price">${price}</div>
        <button onClick={handleToggleDetails}>View</button>
      </div>
    </div>
  );
};

export default ProductCard;