import React, { useState, useEffect, useCallback } from 'react'
const functions = {
  SUM: {
    description:
      'lorem in proident dolore est commodo eu pariatur in mollit irure eu anim nulla magna.',
    demo: 'SUM(range/array, [1..4] or [1,2,3,4])',
  },

  SUB: {
    description:
      'lorem in proident dolore est commodo eu pariatur in mollit irure eu anim nulla magna.',
    demo: 'SUM(a,b)',
  },

  MUL: {
    description:
      'lorem in proident dolore est commodo eu pariatur in mollit irure eu anim nulla magna.',
    demo: 'MUL(a,b)',
  },
}

export default (props) => {
  const [show, setShow] = useState(props.show)
  const [showDescription, setShowDescription] = useState(false)

  const handleKeyUp = useCallback(
    (e) => {
      if (e.key === 'Escape' && show) {
        setShow(false)
      }
    },
    [show]
  )
  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyUp, false)
    return () => document.removeEventListener('keydown', handleKeyUp, false)
  }, [handleKeyUp])

  const mouseEnter = () => setShowDescription(true)

  const mouseLeave = () => setShowDescription(false)

  return show ? (
    <div style={{ top: props.y, left: props.x }} className="fx-suggestion">
      <ul>
        {Object.keys(functions).map((o, i) => (
          <li
            className="sug"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            key={i}
            onClick={() => props}
          >
            <div>{o}</div>
            <div className="descr">
              <div className="demo">{functions[o].demo}</div>
              <div>{functions[o].description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}
