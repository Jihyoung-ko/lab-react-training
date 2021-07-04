import { Component } from 'react';
import profiles from '../data/berlin.json'



class FaceBook extends Component {
  constructor(props){
    super(props);
    this.state= {
      country: ""
    }
  }

  handleCountrySelect = (e) => {
    this.setState({country: e.target.innerText})
  }
 
  render() {
    const { country } = this.state;
    const countries = profiles.map(profile => profile.country);
    const uniqueCountries = [...new Set(countries)];

    return(
      <div>
        <div className="button-container" style={{marginBottom:"10px"}}>
        
          <button className="facebook-btn" onClick={this.handleCountrySelect}>All</button>
          { uniqueCountries.map(country => {
            return (
              <button className="facebook-btn" style={{backgroundColor:country === this.state.country ? "#92ccea" : "white" }} onClick={this.handleCountrySelect}>{country}</button>
            )
          })}


        </div>
        <div className="card-container">
        { profiles.map(profile => {
          return (
            <div className="container flex" style={{ backgroundColor:profile.country === country ? "#92ccea" : "white" , marginRight:"10px"}} onClick={this.handleShowInfo}>
              <div className="img-container">
                <img style={{height:"150px", width:"150px"}}  src={profile.img} alt={profile.firstName} />
              </div>
              
              <div className="text-container" >
                <p><span>First name: </span> {profile.firstName}</p>
                <p><span>Last name: </span> {profile.lastName}</p>
                <p><span>Country: </span> {profile.country}</p>
                <p><span>Type: </span> {(profile.isStudent ? "Student" : "Teacher")}</p>
              </div> 
            </div>
          )
        })}
        </div>
      </div>
      
     
    )
  }
  
}

export default FaceBook;