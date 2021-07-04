import { Component } from "react";
import SingleColorPicker from "./SingleColorPicker";

class RGBColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state= {
      rVavlue:0,
      gValue:0,
      bValue:0,
    }
  }

  setRedColor =(e) => {
    if(e.target.value > 255) {
      alert("Please enter number between 0 and 255")
    } 
    this.setState({
      rVavlue: e.target.value
    })
  }

  setGreenColor =(e) => {
    if(e.target.value > 255) {
      alert("Please enter number between 0 and 255")
    } 
    this.setState({
      gValue: e.target.value
    })
  }

  setBlueColor =(e) => {
    if(e.target.value > 255) {
      alert("Please enter number between 0 and 255")
    } 
    this.setState({
      bValue: e.target.value
    })
  }

  render() {
    const { rVavlue, gValue, bValue } = this.state;
    return (
      <div>
        <SingleColorPicker color="r" handleValue={this.setRedColor}/>
        <SingleColorPicker color="g" handleValue={this.setGreenColor}/>
        <SingleColorPicker color="b" handleValue={this.setBlueColor}/>
        
        <div className="flex color-picker">
          <div className="box" style={{backgroundColor:`rgb(${rVavlue}, ${gValue}, ${bValue})`}}></div>
          <p>rgb({`${rVavlue}, ${gValue}, ${bValue}`})</p>
        </div>
      </div>
    )
  }
}

export default RGBColorPicker;