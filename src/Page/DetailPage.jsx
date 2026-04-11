import React from 'react'
import './DetailPage.css'
import Button from '../Components/Button'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    

    const fetchProduct = async () => {
        try {
            const res =  await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            setProduct(res.data);
            setIsLoading(false)
            console.log(isLoading)
        } catch (error) {
            console.log(error.message)
        }
    }
   useEffect(() => {
        fetchProduct();
}, [])
  return (
    <div className=''>
        {/* <Header/> */}
        {isLoading? (<div className='loading'>Loading...</div>
        ):(
            <div className='main_Store'>
        <div className='detail_Main'>
      <section className='left_Store'>
        <div className='leftTop_Store'>
            <h3>Designed by Anthony Onyema</h3>
            <p>☆ 4.5 (100 reviews)</p>
            <div className='single_Line'>
            <div className='line_Red'></div>
            <div className='line_Black'></div>
            <div className='line_Yel'></div>
            <div className='line_Blue'></div>
            </div>
        </div>
        <div className='leftDown_Store'>
           <div className="left_Btn"> ◄ </div>
            <img src={product.images?.[0]} alt={product.title} />
            <div className="right_Btn"> ► </div>
        </div>
      </section>
      <article className='right_Store'>
        <div className='rightTop_Store'>
            <h1>{product.title}</h1>
            <p>Item code: {product.id}</p>
            <p>DESCRIPTION</p>
            <span>{product.description}</span>
        </div>
        <div className='rightMiddle_Store'>
            <p>PRICE</p>
            <h1>{product.price} </h1>
            <p>COLOR</p>
                     <select name="" id="color-select">
              <option value="green">GREEN</option>
              <option value="blue">BLUE</option>
              <option value="orange">ORANGE</option>
              <option value="purple">PURPLE</option>
            </select>
            <p>QUANTITY</p>
            <div className='rightMid_Cart'>
                    <select name="" id="quantity-select">
                <option value="one">01</option>
                <option value="two">02</option>
                <option value="three">03</option>
                <option value="four">04</option>
                <option value="five">05</option>
              </select>
                <Button name="ADD TO CART" className="cart"/>
            </div>
        </div>
        <div className='rightDown_Store'>
            <h3 className='det'>DETAILS</h3>
            <h3 className='del'>DELIVERY</h3>
            <h3 className='ret'>RETURN</h3>
        </div>
      </article>
      </div>
      </div>
      )}
    </div>
  )
}

export default DetailPage
