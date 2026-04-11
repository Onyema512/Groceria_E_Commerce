import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TestProducts = () => {
    const getAll = async () => {
        const BaseUrl = "https://fakestoreapi.com/products"
        try {
            const response = await axios.get (BaseUrl)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getAll();
    }, []);


  return (
    <div>
      
    </div>
  )
}

export default TestProducts
