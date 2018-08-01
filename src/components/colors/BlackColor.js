import React from 'react';

const BlackColor = (props) => {
    return(
        <div className="black-color-pallet" onClick={(e) => props.changeColor("black")}></div>
    )
}

export default BlackColor;