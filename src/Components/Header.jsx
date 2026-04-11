import React from 'react'
import './Header.css'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='main_Header'>
      <section className='sub_Header'>
        <article className='left_Header'>
            <h1>Anthony</h1>
        </article>
        <div className='middle_Header'>
            <div className='middle_Buttons'>
              <Button onClick={() => navigate("/")} name="Home" className="home"/>
               <Button onClick={() => navigate("/stores")} name="Stores" className="store"/>
            </div>
            <div className='middle_Input'>
                <input type="text" placeholder='Search for food items' className='food' />
               <Button onClick={() => navigate("/")} name="Search" className="search"/>
            </div>
        </div>
        <div className='right_Header'>
            <Button onClick={() => navigate("/signup")} name="Register" className="register"/>
            <Button onClick={() => navigate("/login")} name="Login" className="login"/>
        </div>
      </section>
    </header>
  )
}

export default Header
