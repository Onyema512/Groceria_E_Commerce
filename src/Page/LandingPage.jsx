import React, { useEffect, useState } from "react";
import Hero from '../Components/Hero'
import AllProducts from '../Components/AllProducts'
import PopUp from '../Components/PopUp'

const LandingPage = () => {
    const [showPop, setShowPop] = useState(false);

  useEffect(() => {
    setShowPop(true);
  }, []);

  const closePop = () => {
    setShowPop(false);
  };

  return (
    <div style={{position: "relative"}}>
      <Hero/>
      <AllProducts/>
      {showPop ? <PopUp closePop={closePop} /> : null}
    </div>
  )
}

export default LandingPage
