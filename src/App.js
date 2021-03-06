import React, { Component } from 'react';
import Sketch from './components/Sketch';
import Button from '@material-ui/core/Button';
import Pallets from './components/Pallets';
import ClearCanvas from './components/ClearCanvas';
import './App.css';



class App extends Component {
  constructor(props){
    super();
    this.state = {
      sketchData: "",
      sketch: {
        penColor: "black"
      },
      user: {
        finalSketch: ""
      }
    }
    this.updateSketch = this.updateSketch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  updateSketch(sketchData){
    this.setState({
      sketchData: sketchData
    })
  }

 async getImage(){
    this.setState({
      user:{
        finalSketch: this.state.sketchData.toDataURL()
      }
    })
    return;
  }

  handleClick(){
      this.getImage()
      .then((value)=>{
          // this.state.sketchData.clear();
          const link = document.createElement('a');
          link.download = 'image.png';
          link.href = this.state.user.finalSketch;
          link.click();
      } )
  }

  changeColor(color){
    this.setState({
      sketch: {
        penColor: color
      }
    })
  }

  render() {
   
    return (
    
      <div className="App">
      <div className="title">
        <h1>Easy canvas</h1>
        </div>
        <div className="canvas">
        <Sketch updateSketch={this.updateSketch} className = "SketchField" penColor={this.state.sketch.penColor}/>
         </div>
          <Pallets 
          changeColor = {this.changeColor}
          style={{background: "grey", width: "30px", height: "30px"}}
          />
        
        <div className = "buttons">
        <ClearCanvas sketchData = {this.state.sketchData} />
        <Button 
          onClick={this.handleClick}
          penColor={this.state.sketch.penColor}
          >Download!</Button>
        </div>
        </div>
     
    );
  }
}

export default App;
