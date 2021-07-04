import { Component } from "react";
import Greeting from "./Greeting";

class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.state={
      email: "",
      password: "",
      nationality: "",
      showWelcome: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({showWelcome: true})
  }

  render() {
    const { email, password, nationality, showWelcome} = this.state;
    return (
      <div className="sign-up-container ">
        <form onSubmit={this.handleFormSubmit} className="flex">
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
 
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
 
          <label>Nationality</label>
          <select name="nationality" value={nationality} onChange={this.handleChange}>
            <option value="en">U.K</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
            <option value="es">Spain</option>
            
          </select>
          
          <button className="sign-up-btn">Sign up</button>
        </form>
        { showWelcome && <div className="greeting-container">
          <p><Greeting lang={nationality}></Greeting></p>
          <p>Your email is {email}</p>
        </div> }
      </div>
    )
  }
}

export default SignUpPage;