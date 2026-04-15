import React from 'react'
import './CartPage.css'
import Button from '../Components/Button'
import image from '../assets/asset 6 1.png'
import { LuMinus } from "react-icons/lu";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { TbSquareNumber1 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate = useNavigate();
  return (
    <div className='main_Cart'>
        <section className='sub_Cart'>
          <article className='full_LeftCart'>
            <div className='cart_Topleft'>
                 <article className='cart_Text'>Your Cart (1 Item)</article>
                 <section className='cart_Lists'>
                    <span>Product</span>
                    <span>Unit Price</span>
                    <span>Total</span>
                    <span>Remove</span>
                 </section>
            </div>
            <div className='cart_BottomLeft'>
                <article className='yam_Section'>
                    <div className='yam_Pic'>
                        <img src={image} alt="Yam" />
                    </div>
                    <div className='yam_Text'>
                        <div className='yam_Grade'>
                            <h2>Yam-Grade B</h2>
                        </div>
                        <div className='yam_Kg'>
                            <h3>500kg</h3>
                        </div>
                    </div>
                </article>
                <section className='cart_BottomDown'>
                    <article className='btm_Qty'>
                        <div className='qty_Text'>
                            <p>Quantity</p>
                        </div>
                        <div className='qty_PlusMinus'>
                             <div className="minus_Qty"><LuMinus /></div>
                              <div className="qty_Number"> 1</div>
                              <div className="plus_Qty"> +</div>
                        </div>
                        <div className='qty_Btn'>
                            <Button name ="Add more items" className="add_More"/>
                        </div>
                    </article>
                    <div className='qty_Amt'>
                      <section className='qty_AmtTop'>
                        <div className='amt_Number1'>
                            <h3># 900:00</h3>
                        </div>
                        <div className='amt_Number2'>
                            <h3># 900:00</h3>
                        </div>
                        <div className='remove_Qty'>
                            <Button name ="Remove" className="remove_Btn1" />
                        </div>
                     </section>
                     <div className='qty_AmtDown'>
                        <Button name ="Remove" className="remove_Btn2" />
                     </div>
                    </div>
                </section>
            </div>
         </article>
         <section className='CRight'>
          <div className='CRightSub'>
            <div className='subPrice'>
              <p>Subtotal:</p>
              <p># 900.00</p>
            </div>
            <div className='total_Kg'>
                <p>0.5kg</p>
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
