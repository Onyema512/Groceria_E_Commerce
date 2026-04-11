import React from 'react'
import './Stores.css'
import Button from '../Components/Button'
import { TiMinusOutline } from "react-icons/ti";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Stores = () => {
  return (
    <div className='main_Store'>
      <section className='left_Store'>
        <div className='leftTop_Store'>
            <h3>Designed by Anthony Onyema</h3>
            <p>☆ 4.5 (100 reviews)</p>
            <div className='single_Line'>
            {/* <div className='line_Yel'><TiMinusOutline /></div>
            <div className='line_Red'><TiMinusOutline /></div>
            <div className='line_Black'><TiMinusOutline /></div>
            <div className='line_Blue'><TiMinusOutline /></div> */}
            <div className='line_Red'></div>
            <div className='line_Black'></div>
            <div className='line_Yel'></div>
            <div className='line_Blue'></div>
            </div>
        </div>
        <div className='leftDown_Store'>
           <div className="left_Btn"> ◄ </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUgEWm3RYr12vrJsCs1xB7ErZVZHCkS5yeA&s" alt="pic" />
            <div className="right_Btn"> ► </div>
        </div>
      </section>
      <article className='right_Store'>
        <div className='rightTop_Store'>
            <h1>Test Ega Lagi</h1>
            <p>Item code: 98</p>
            <p>DESCRIPTION</p>
            <span>Test</span>
        </div>
        <div className='rightMiddle_Store'>
            <p>PRICE</p>
            <h1>$12</h1>
            <p>COLOR</p>
                     <select name="" id="color-select">
              <option value="green">GREEN</option>
              <option value="blue">BLUE</option>
              <option value="orange">ORANGE</option>
              <option value="purple">PURPLE</option>
            </select>
            {/* <input className='input_Green' type="text" placeholder="GREEN" /> */}
            <p>QUANTITY</p>
            <div className='rightMid_Cart'>
                {/* <input className='input_Num' type="text" placeholder="01"/> */}
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
  )
}

export default Stores
