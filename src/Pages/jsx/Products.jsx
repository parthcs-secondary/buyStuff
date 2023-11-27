import React from 'react'
import "../styles/Products.css"
import ProductListing from '../../components/jsx/ProductListing'
import Filters from '../../components/jsx/Filters'

const Products = () => {
  return (
    <div className='wrapper-products'>
      <div className="product-filter-container">
      <Filters/>
      <ProductListing/>
      </div>
    </div>
  )
}

export default Products