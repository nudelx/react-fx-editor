import React, { useState } from 'react'
import FXS from './fxSuggestion'
import getXY from './getXY'
export default () => {
  const [txt, setTxt] = useState('')
  const [trigger] = useState('=')
  const [showFX, setShowFX] = useState(false)
  const [coordinates, setShowFXCoordinates] = useState({})

  const checkTrigger = (txt) => txt.charAt(txt.length - 1) === trigger

  const handleChange = (e) => {
    if (checkTrigger(e.target.value)) {
      setShowFX(true)
      var coordinates = getXY(e.target, e.target.selectionStart)
      console.log(coordinates)
      console.log(coordinates)
      setShowFXCoordinates({ x: coordinates.x, y: coordinates.y - 290 })
    }
    setTxt(e.target.value)
  }

  return (
    <div className="container">
      <div className="write">
        <FXS show={showFX} x={coordinates.x} y={coordinates.y}></FXS>
        <textarea onChange={handleChange} value={txt}></textarea>
      </div>
      <div className="show"></div>
    </div>
  )
}
