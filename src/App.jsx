import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LandingPage from './Page/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Page/SignUp'
import LoginPage from './Page/LoginPage'
import Stores from './Page/Stores'
import Header from './Components/Header'
import Error from './Page/Error'
import DetailPage from './Page/DetailPage'


function App() {
  return (
           <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Error/>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/details/:id" element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
