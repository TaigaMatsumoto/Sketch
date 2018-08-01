import React from 'react';

const WhiteColor = (props) => {
    return(
        <div className="white-color-pallet" onClick={(e) => props.changeColor("white")}></div>
    )
}

export default WhiteColor;