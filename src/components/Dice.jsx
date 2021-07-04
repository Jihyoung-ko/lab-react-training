import { Component } from "react";

const randomNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
} 

class Dice extends Component {
  constructor(props){
    super(props);
    this.state = {
      diceNumber: randomNumber(1, 6)
    }
  }

  handleEmptyDice = () => {
    this.setState({
      diceNumber: "-empty"
    }, () => this.secondDice())
   
  }

  secondDice = () => {
    setTimeout(() => this.setState({
      diceNumber: randomNumber(1, 6)
    }),1000)
  }

  render() {
    const {diceNumber} = this.state;
    const diceImage = `../img/dice${diceNumber}.png`
    return (
      <div>
        <img style={{height:"150px", width:"150px"}} src={diceImage} alt="dice"  onClick={this.handleEmptyDice}/>
      </div>
    )
  }
}

export default Dice;