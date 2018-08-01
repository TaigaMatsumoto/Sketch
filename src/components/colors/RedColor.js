import React from 'react';

const RedColor = (props) => {
    return(
        <div className="red-color-pallet" onClick={(e) => props.changeColor("red")}></div>
    )
}

export default RedColor;