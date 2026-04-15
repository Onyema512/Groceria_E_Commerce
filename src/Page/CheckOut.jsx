import React from 'react'
import './CheckOut.css'
import Button from '../Components/Button'

const CheckOut = () => {
  return (
   <div className="checkout">
      <div className="checkout_left">
        <h2>Information</h2>
        <input type="email" placeholder="Email" />       
       <label className="checkbox">
         <input type="checkbox" />
         <span>Email me with news and offers.</span>
       </label>
        <h2>Shipping Address</h2>
        <div className="row">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Address" />
        <select>
          <option>Country</option>
        </select>
        <select>
          <option>City</option>
        </select>
        <input type="text" placeholder="Phone number" />
        <p className="return">← Return to cart</p>
        <h2>Payment</h2>
        <p className="secure">All transactions are secure and encrypted</p>
        <input type="text" placeholder="Card number" />
        <div className="row">
          <input type="text" placeholder="Expiration date (MM/YY)" />
          <input type="text" placeholder="Card Pin" />
        </div>
        <input type="text" placeholder="Name on card" />
        {/* <button className="order_btn">PLACE ORDER</button> */}
         <Button name ="PLACE ORDER" className="order_btn"/>
      </div>
    
      <div className="checkout_right">
        <div className="product">
          <div className="img_box">Image</div>
          <div>
            <h4>Product Name</h4>
            <p>₦ 1,500</p>
          </div>
        </div>
        <div className="discount">
          <input type="text" placeholder="Discount code or Gift card" />
          <button>APPLY</button>
        </div>
        <div className="summary">
          <p>Subtotal <span>₦ 8,000</span></p>
          <p>Shipping <span>₦ 0.00</span></p>
          <h3>Total <span>₦ 8,000</span></h3>
        </div>

      </div>

    </div>
  )
}

export default CheckOut
