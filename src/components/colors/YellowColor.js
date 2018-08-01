import React from 'react';

const YellowColor = (props) => {
    return(
        <div className="yellow-color-pallet" onClick={(e) => props.changeColor("Yellow")}></div>
    )
}

export default YellowColor;