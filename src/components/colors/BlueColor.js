import React from 'react';

const BlueColor = (props) => {
    return(
        <div  className="blue-color-pallet" onClick={(e) => props.changeColor("blue")}></div>
    )
}

export default BlueColor;