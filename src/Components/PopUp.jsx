import React from 'react'
import './PopUp.css'

const PopUp = ({closePop}) => {
  return (
        <div className="PopBody">
      <div className="Popcard">
        <button onClick={closePop}>Close</button>
      </div>
      <div className="Popcard1"></div>
    </div>
  )
}

export default PopUp
