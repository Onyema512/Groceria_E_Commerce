import React from 'react'
import './CheckOutPage.css'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'

const CheckOutPage = () => {
  const navigate = useNavigate();
  return (
   <div className="checkout2">
      <div className="left">
        <p onClick={() => navigate("/cart")} className="back">← Back to Cart</p>
        <h1>Checkout</h1>
        <div className="section">
          <div className="section_header">
            <span className="step">1</span>
            <h3>Contact Information</h3>
          </div>
          <div className="row">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
          </div>
          <div className="row">
            <input placeholder="Email Address" />
            <input placeholder="Phone Number" />
          </div>
        </div>
        <div className="section">
          <div className="section_header">
            <span className="step">2</span>
            <h3>Shipping Address</h3>
          </div>
          <input placeholder="Street Address" />
          <div className="row">
            <input placeholder="City" />
            <input placeholder="State" />
          </div>
          <input placeholder="ZIP Code" />
        </div>
        <div className="section">
          <div className="section_header">
            <span className="step">3</span>
            <h3>Payment Method</h3>
          </div>
          <div className="payment_options">
            <button className="active">Credit Card</button>
            <button>Bank Transfer</button>
          </div>
          <input placeholder="Card Number" />
          <input placeholder="Name on Card" />
          <div className="row">
            <input placeholder="Expiry Date" />
            <input placeholder="CVV" />
          </div>
        </div>
        {/* <button className="place_order">Place Order</button> */}
        <Button name ="Place Order" className="order_btn"/>
      </div>

      <div className="right">
        <h3>Order Summary</h3>
        <div className="item">
          <p>Product Name</p>
          <span>₦20,000</span>
        </div>
        <div className="item">
          <p>Product Name</p>
          <span>₦8,500</span>
        </div>
        <div className="item">
          <p>Product Name</p>
          <span>₦6,000</span>
        </div>
        <hr />
        <div className="summary">
          <p>Subtotal <span>₦34,500</span></p>
          <p>Delivery Fee <span>₦1,500</span></p>
          <p>Tax <span>₦500</span></p>
        </div>
        <h2 className="total">Total ₦36,500</h2>
        <p className="secure">✔ Secure Checkout - Your information is protected</p>
      </div>

    </div>
  )
}

export default CheckOutPage
