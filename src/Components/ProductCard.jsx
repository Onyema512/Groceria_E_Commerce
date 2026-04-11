import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate();
  return (
     <div className='card_Body' onClick={() => navigate(`/details/${product.id}`)}>
      <section className='card_Image'>
        <img src={product.images?.[0]} alt={product.title} />
      </section>
      <h2>{product.title}</h2>
      <span>${product.price}</span>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard
