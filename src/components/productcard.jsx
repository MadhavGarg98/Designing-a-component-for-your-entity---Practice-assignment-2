import React from 'react';
import ViewButton from '../components/button'; // Importing ViewButton component

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const price = "$99.99";

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" className="product-image" />
      <h2>{productName}</h2>
      <p><strong>Price:</strong> {price}</p>
      <ViewButton />
    </div>
  );
};

export default Productcard;