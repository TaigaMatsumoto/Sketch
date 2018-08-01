import React from 'react';
import {SketchField, Tools} from 'react-sketch';

class Sketch extends React.Component {
    constructor(props){
        super(props);
        this.sketchRef = React.createRef();
    }
    componentDidMount(){
        this.props.updateSketch(this.sketchRef.current);
    }
     render() {
        return (
            <SketchField 
                ref = {this.sketchRef}            
                width='400px' 
                height='400px' 
                tool={Tools.Pencil} 
                className = "SketchField"
                lineColor= {this.props.penColor}
                lineWidth={3}/>
        )
     }}

export default Sketch;
    

