import React from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json'

const ProductDetails = () => {
  const {id} = useParams();
  const product = data.products.find(product => product.id === parseInt(id));
  console.log(product);
  if (!product) {
    // console.log(product);
    return <div>No product selected</div>;
  }
  return (
    <div>
      <div>{product.title}</div>
    </div>
  );
};

export default ProductDetails;
