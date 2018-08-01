import React, { Component } from 'react'
import BlueColor from './colors/BlueColor';
import BlackColor from './colors/BlackColor';
import GreenColor from './colors/GreenColor';
import RedColor from './colors/RedColor';
import WhiteColor from './colors/WhiteColor';
import YellowColor from './colors/YellowColor';

class Pallets extends Component {
render(){
    return(
    <div className="pallets">
        <BlackColor changeColor = {this.props.changeColor} />
        <WhiteColor changeColor = {this.props.changeColor} />
        <BlueColor changeColor = {this.props.changeColor} />
        <GreenColor changeColor = {this.props.changeColor} />
        <RedColor changeColor = {this.props.changeColor} />
        <YellowColor changeColor = {this.props.changeColor} />
    </div>
    )
}
};
export default Pallets;
