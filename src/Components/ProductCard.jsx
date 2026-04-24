import React, { useContext } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/CartSlice';

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const {dispatch} = useContext(AppContext)
     console.log(useContext(AppContext))
     const dispatchToRedux = useDispatch();

  return (
    // <div  className='card_Body'>
     <div className='card_Body'> 
      <section className='card_Image'  onClick={() => navigate(`/details/${product.id}`)}>
        <img src={product.images?.[0]} alt={product.title} />
      </section>
      <h2>{product.title}</h2>
      <span>${product.price}</span>
      {/* <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product}) }>Add to cart</button> */}
      <button onClick={() => dispatchToRedux(addToCart(product))}>Add to cart</button>
    </div>
  )
}

export default ProductCard
