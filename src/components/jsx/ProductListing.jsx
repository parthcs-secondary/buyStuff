import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.css";
import data from "../../data.json";
import ProductDetails from "../../Pages/jsx/ProductDetails";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductListing = () => {
  // const navigate = useNavigate();
  const products = data.products;
  // console.log(data.products[0]);
  // console.log("Hello");
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleClick = (productId) => {
  //   console.log(productId)
  //   const product = products.find((product) => product.id === productId);
  //   console.log(productId)
  //   console.log("Inside -> Clicked product:", product);
  //   setSelectedProduct(product);
  //   console.log("Inside -> selected product:", selectedProduct);
  //   // navigate(`/products/${productId}`);
  // };
  // console.log("Outside -> selected product:", selectedProduct);
  return (
    <div className="wrapper-product-listing">
      {products.map((product) => (
        //learn about this onclick arrow func
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <ProductCard
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.images[0]}
            />
          </Link>
        </div>
      ))}
      {/* {selectedProduct && console.log("Trueee")} */}
      {/* {selectedProduct && <ProductDetails product={selectedProduct} />} */}
    </div>
  );
};

export default ProductListing;
