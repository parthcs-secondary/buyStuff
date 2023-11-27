import React from 'react'
import "../styles/ProductCard.css"
const ProductCard = ({image, title, category, price}) => {
  return (
    <div className='wrapper-product-card'>
        <div className="product-image" style={{width: "220px", height: "350px", backgroundSize: "cover", backgroundImage: `url(${image})`}}></div>
        <div className="product-title">{title}</div>
        <div className="product-category">{category}</div>
        <div className="product-price">{price}</div>
    </div>
  )
}

export default ProductCard