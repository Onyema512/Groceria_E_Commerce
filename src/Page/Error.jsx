import React from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height: "100vh",
        background: "red",
        flexDirection: "column",
        color: "white",
        gap: "20px"
    }}>
      <h1>404 page not found</h1>
       <Button onClick={() => navigate("/")} name="Go back" className="home"/>
    </div>
  )
}

export default Error
