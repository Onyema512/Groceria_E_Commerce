import React from 'react'
import './CartPage.css'
import Button from '../Components/Button'
import image from '../assets/asset 6 1.png'
import { LuMinus } from "react-icons/lu";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { TbSquareNumber1 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const CartPage = () => {
    const navigate = useNavigate();
    const {cart, dispatch} = useContext(AppContext);

     const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <div className='main_Cart'>
        <section className='sub_Cart'>
          <article className='full_LeftCart'>
            <div className='cart_Topleft'>
                 <article className='cart_Text'>
                     Your Cart ({cart.length} Item{cart.length !== 1 && "s"})
                    </article>
                 <section className='cart_Lists'>
                    <span>Product</span>
                    <span>Unit Price</span>
                    <span>Total</span>
                    <span>Remove</span>
                 </section>
            </div>

               <div className='cart_BottomLeft'>
            {cart.length === 0 ? (
              <h2>Your cart is empty</h2>
            ) : (
              cart.map((item) => (
                <div className="cart_Item" key={item.id}>

                  <article className='yam_Section'>
                    <div className='yam_Pic'>
                      <img src={item.images?.[0]} alt={item.title} />
                    </div>

                    <div className='yam_Text'>
                      <div className='yam_Grade'>
                        <h2>{item.title}</h2>
                      </div>
                      <div className='yam_Kg'>
                        <h3>{item.quantity} item(s)</h3>
                      </div>
                    </div>
                  </article>

                  <section className='cart_BottomDown'>

                    <article className='btm_Qty'>
                      <div className='qty_Text'>
                        <p>Quantity</p>
                      </div>

                      <div className='qty_PlusMinus'>
                        <div className="minus_Qty"  onClick={() => dispatch({type: "REMOVE_ONE", payload: item.id})}>
                          <LuMinus />
                        </div>

                        <div className="qty_Number">
                          {item.quantity}
                        </div>

                        <div className="plus_Qty"  onClick={() => dispatch({type: "ADD_ONE", payload: item.id})}>
                          +
                        </div>
                      </div>

                      <div className='qty_Btn'>
                        <Button name="Add more items" className="add_More"/>
                      </div>
                    </article>

                    {/* PRICE */}
                    <div className='qty_Amt'>
                      <section className='qty_AmtTop'>

                        <div className='amt_Number1'>
                          <h3>₦ {item.price}</h3>
                        </div>

                        <div className='amt_Number2'>
                          <h3>₦ {item.price * item.quantity}</h3>
                        </div>

                        <div className='remove_Qty'>
                          <Button name="Remove" className="remove_Btn1" onClick={() => dispatch({type: "REMOVE_ONE", payload: item.id})}/>
                        </div>
                      </section>

                      <div className='qty_AmtDown'>
                        <Button  name="Remove" className="remove_Btn2" onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: item.id})}/>
                      </div>
                    </div>

                  </section>

                </div>
              ))
            )}

          </div>
        </article>
         <section className='CRight'>
          <div className='CRightSub'>
            <div className='subPrice'>
              <p>Subtotal:</p>
              <p>₦ {subtotal.toFixed(2)}</p>
            </div>
            <div className='total_Kg'>
                <p>{cart.length} item(s)</p>
            </div>
          <div className="checkbox">
            <input type="checkbox" />
            <h3>i have read the instrusction above and <br />
            i agree to <span className='groc'>Groceria return Policy </span></h3>
          </div>
          <Button onClick={() => navigate("/check")} name= "Proceed to checkout" className='bbbb'/>
          </div>
        </section>
        </section>
      
    </div>
  )
}

export default CartPage
