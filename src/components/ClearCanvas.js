import React from 'react'

const ClearCanvas = (props) => {
    return(
        <div onClick = {(e) => props.sketchData.clear()}>Clear</div>
    )
}

export default ClearCanvas;