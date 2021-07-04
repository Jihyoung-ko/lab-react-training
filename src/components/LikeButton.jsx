import {Component} from "react";

const colors= ['purple','blue','green','yellow','orange','red']

class LikeButton extends Component  { 
  constructor(props){
    super(props);
    this.state = {
      count:0,
      countColor: 0,
    }
  }
  buttonHandler = () => {
    const { count, countColor } = this.state;

    const limitedIndex = (num) => {
      let modulusNumber = num % 5;
      return modulusNumber;
    }
    this.setState({
      count: count + 1,
      countColor: limitedIndex(countColor + 1)
    })}
  
  render() {
    const { count, countColor } = this.state;
    return (
      <button className="like-button" style={{color:"white", padding:"10px 15px", marginRight:"5px", backgroundColor:colors[countColor]}} onClick={this.buttonHandler}>{count} Like</button>
    )
  }
}

export default LikeButton;