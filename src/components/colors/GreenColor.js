import React from 'react';

const GreenColor = (props) => {
    return(
        <div className="green-color-pallet" onClick={(e) => props.changeColor("green")}></div>
    )
}

export default GreenColor;