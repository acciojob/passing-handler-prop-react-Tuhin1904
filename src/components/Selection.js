import React, { useState } from 'react'
import './../styles/Child.css'

const Selection = ( {applyColor}) => {
    const [background, setBackground] = useState({ backgroundColor: '' });
    const updateSelectionStyle = (newBackground) => {
        console.log(newBackground)
        setBackground(newBackground);
    };

  return (
    <div className='fix-box' style={background} onClick={() => applyColor(updateSelectionStyle)}>
        <p className='subheading'>Selection</p>
    </div>
  )
}

export default Selection
