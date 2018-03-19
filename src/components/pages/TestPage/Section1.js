import React from 'react';
import './section.css';

const boxStyle = {
  backgroundColor: 'pink',
  width: '50vw',
  height: '400px',
  flex: '0 0 50vw',
}

const Section1 = () => {

  return (
    <div style={boxStyle} className={"fadein"}>
      Section1
    </div>
  )
}

export default Section1;