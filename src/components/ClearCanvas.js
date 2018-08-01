import React from 'react'

const ClearCanvas = (props) => {
    return(
        <div style={{textAlign: "center"}}onClick = {(e) => props.sketchData.clear()}>Clear</div>
    )
}

export default ClearCanvas;