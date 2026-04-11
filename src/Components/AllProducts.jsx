import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AllProductCard from './AllProductCard';

const AllProducts = () => {
  // const [allBtn, setAllBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(true)

  const [allProducts, setAllProduct] = useState([]);

  // const everything = () =>{
  //   setAllBtn(true);
  // }

  const getAllProduct = async () => {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const res = await axios.get(url);
      setAllProduct(res?.data);
      setIsLoading(false)
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
  <div>
    <section>
     {/* <button onClick={everything}>All</button> */}
     {isLoading ? (
      <div>Loading...</div>
     ):  (
    <AllProductCard allProducts ={allProducts} />
  )}
     </section>

    
    </div>
  )
 
};
export default AllProducts
