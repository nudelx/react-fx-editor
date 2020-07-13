import React, { useState } from 'react'
export default (props) => {
  const [show, setShow] = useState(false)

  return show || props.show ? (
    <div style={{ top: props.y, left: props.x }} className="fx-suggestion">
      <ul>
        <li>AAA</li>
        <li>BBB</li>
        <li>CCC</li>
      </ul>
    </div>
  ) : null
}
