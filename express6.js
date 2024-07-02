import React from 'react';

// Example data from the API response
const laptops = [
  {
    "productName": "Laptop 1",
    "price": 2236,
    "rating": 4.7,
    "discount": 63,
    "availability": "yes"
  },
  {
    "productName": "Laptop 13",
    "price": 1244,
    "rating": 4.5,
    "discount": 45,
    "availability": "out-of-stock"
  },
  // ... other laptop data
];

function ProductList() {
  return (
    <div>
      {laptops.map((laptop, index) => (
        <div key={index}>
          <h2>{laptop.productName}</h2>
          <p>Price: ${laptop.price}</p>
          <p>Rating: {laptop.rating} stars</p>
          <p>Discount: {laptop.discount}%</p>
          <p>Availability: {laptop.availability}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
