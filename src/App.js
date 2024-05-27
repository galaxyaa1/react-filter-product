import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';

const App = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const products = [
    {
      name: "Stylish Shoes",
      image: "/images/shoes1.jpg",
      category: "shoes",
      discount: 20,
      price: 50,
      description: "Comfortable and trendy shoes for any occasion.",
      sizes: "6, 7, 8, 9, 10",
      remaining: 25
    },
    {
      name: "Stylish Shoes",
      image: "/images/shoes2.jpg",
      category: "shoes",
      discount: 20,
      price: 50,
      description: "Comfortable and trendy shoes for any occasion.",
      sizes: "6, 7, 8, 9, 10",
      remaining: 25
    },
    {
      name: "Stylish Shoes",
      image: "/images/shoes3.jpg",
      category: "shoes",
      discount: 20,
      price: 50,
      description: "Comfortable and trendy shoes for any occasion.",
      sizes: "6, 7, 8, 9, 10",
      remaining: 25
    },
    {
      name: "Stylish Shoes",
      image: "/images/shoes4.jpg",
      category: "shoes",
      discount: 20,
      price: 50,
      description: "Comfortable and trendy shoes for any occasion.",
      sizes: "6, 7, 8, 9, 10",
      remaining: 25
    },
    {
      name: "Stylish Shoes",
      image: "/images/a.jpg",
      category: "shoes",
      discount: 20,
      price: 50,
      description: "Comfortable and trendy shoes for any occasion.",
      sizes: "6, 7, 8, 9, 10",
      remaining: 25
    },
    {
      name: "Casual Shirt",
      image: "/images/shirt1.jpg",
      category: "shirts",
      discount: 15,
      price: 30,
      description: "Soft and breathable shirt perfect for everyday wear.",
      sizes: "S, M, L, XL",
      remaining: 30
    },
    {
      name: "Casual Shirt",
      image: "/images/shirt2.png",
      category: "shirts",
      discount: 15,
      price: 30,
      description: "Soft and breathable shirt perfect for everyday wear.",
      sizes: "S, M, L, XL",
      remaining: 30
    },
    {
      name: "Casual Shirt",
      image: "/images/shirt3.jpg",
      category: "shirts",
      discount: 15,
      price: 30,
      description: "Soft and breathable shirt perfect for everyday wear.",
      sizes: "S, M, L, XL",
      remaining: 30
    },
    {
      name: "Casual Shirt",
      image: "/images/shirts.jpg",
      category: "shirts",
      discount: 15,
      price: 30,
      description: "Soft and breathable shirt perfect for everyday wear.",
      sizes: "S, M, L, XL",
      remaining: 30
    },
    {
      name: "Casual Shirt",
      image: "/images/shirt1.jpg",
      category: "shirts",
      discount: 15,
      price: 30,
      description: "Soft and breathable shirt perfect for everyday wear.",
      sizes: "S, M, L, XL",
      remaining: 30
    },
    {
      name: "Leather Bag",
      image: "/images/bag1.jpg",
      category: "bags",
      discount: 10,
      price: 80,
      description: "High-quality leather bag with ample space for your essentials.",
      sizes: "One Size",
      remaining: 15
    },
    {
      name: "Leather Bag",
      image: "/images/bag2.jpg",
      category: "bags",
      discount: 10,
      price: 80,
      description: "High-quality leather bag with ample space for your essentials.",
      sizes: "One Size",
      remaining: 15
    },
    {
      name: "Leather Bag",
      image: "/images/bags3.jpg",
      category: "bags",
      discount: 10,
      price: 80,
      description: "High-quality leather bag with ample space for your essentials.",
      sizes: "One Size",
      remaining: 15
    },
    {
      name: "Leather Bag",
      image: "/images/bags4.jpg",
      category: "bags",
      discount: 10,
      price: 80,
      description: "High-quality leather bag with ample space for your essentials.",
      sizes: "One Size",
      remaining: 15
    },
    {
      name: "Leather Bag",
      image: "/images/bags5.jpg",
      category: "bags",
      discount: 10,
      price: 80,
      description: "High-quality leather bag with ample space for your essentials.",
      sizes: "One Size",
      remaining: 15
    }
  ];

  const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <div className="filter-container">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="shoes">Shoes</option>
          <option value="shirts">Shirts</option>
          <option value="bags">Bags</option>
        </select>
      </div>
      <div className="grid-container">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            discount={product.discount}
            price={product.price}
            description={product.description}
            sizes={product.sizes}
            remaining={product.remaining}
          />
        ))}
      </div>
    </div>
  );
};

export default App;














