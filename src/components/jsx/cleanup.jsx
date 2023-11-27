import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import data from "../../data.json";
import ProductDetails from "../../Pages/jsx/ProductDetails";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const navigate = useNavigate();
  const products = data.products;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
    navigate(`/products/${productId}`);
  };
  return (
    <div className="wrapper-product-listing">
      {products.map((product) => (
        <div key={product.id} onClick={() => handleClick(product.id)}>
          <ProductCard
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.images[0]}
          />
        </div>
      ))}
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

export default ProductListing;


import React from "react";

const ProductDetails = ({ product }) => {
  console.log(product);
  if (!product) {
    return <div>No product selected</div>;
  }
  return (
    <div>
      <div>{product.title}</div>
    </div>
  );
};

export default ProductDetails;
