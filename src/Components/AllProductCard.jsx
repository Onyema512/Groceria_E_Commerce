import React from 'react'
import ProductCard from './ProductCard'
import './AllProductCard.css'

const AllProductCard = (props) => {
    console.log("This is all the product", props.allProducts);
  return (
    <>
    <div className='general_Container'>
      {props.allProducts?.map((product) => (
        <ProductCard product={product}  />
      ))}
    </div>
    </>
  )
}

export default AllProductCard
