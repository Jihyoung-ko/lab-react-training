import React , {Component} from 'react';
import './App.css';
import IdCard from './components/IdCard.jsx';
import Greeting from './components/Greeting.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor.jsx';
import CreditCard from './components/CreditCard.jsx';
import Rating from './components/Rating.jsx';
import DriverCard from './components/DriverCard.jsx';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture.jsx';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignUpPage from  './components/SignUpPage.jsx';
import RGBColorPicker from './components/RGBColorPicker';

const images = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg'
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOriginalPicture: true,
      picIndex: 0
    }
  }

  pictureHandler = () => {this.setState({showOriginalPicture: !this.state.showOriginalPicture})}
   
  leftPicture = () => {
    const maxIndex = 3;
    if(this.state.picIndex <= 0 ) {
      this.setState({picIndex: maxIndex})
    } else {
      this.setState({
        picIndex: this.state.picIndex - 1})
    }
  }

  RightPicture = () => {
    const limitedIndex = (num) => {
      let modulusNumber = num % 4;
      return modulusNumber;
    }
    this.setState({
      picIndex: limitedIndex(this.state.picIndex + 1)})}
      

  render() {
    const {  showOriginalPicture, picIndex } = this.state;

    return (
      <div className="App">
        <h1>ID Card</h1>
        <IdCard lastName="Doe" firstName="John" gender="male" height="178" birth= "1992-07-14" picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard lastName="Delores" firstName="Obrien" gender="female" height="172" birth="1988-05-11" picture="https://randomuser.me/api/portraits/women/44.jpg" />

        <h1>Greetings</h1>
        <div className="container">
          <Greeting lang="de">Ludwig</Greeting>
        </div>
        <div className="container">
          <Greeting lang="fr">Francois</Greeting>
        </div>

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>CreditCard</h1>
        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>
        <DriverCard name="Travis Kalanick" rating={4.2} img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428" car={{model: "Toyota Corolla Altis", licensePlate: "CO42DE"}} />
        <DriverCard name="Dara Khosrowshahi" rating={4.9} img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg" car={{model: "Audi A3",licensePlate: "BE33ER"}} />

        <h1>LikeButton</h1>
        <LikeButton />
        <LikeButton />

        <h1>ClickablePicture</h1>
        { showOriginalPicture ? <ClickablePicture  onChangePicture={this.pictureHandler} img='/img/persons/maxence.png' /> :  <ClickablePicture  onChangePicture={this.pictureHandler} img='/img/persons/maxence-glasses.png' /> }
      
        <h1>Dice</h1>
        <Dice />

        <h1>Carousel</h1>
        <Carousel img={images[picIndex]} picToLeft={this.leftPicture} picToRight={this.RightPicture} />

        <h1>NumbersTable</h1>
        <div className="flex">
          {[...Array(12)].map( (value, index) => (
            <NumbersTable  key={index} number={index + 1}  />
            )
          )}
        </div>
      
        <h1>Facebook</h1>
        <FaceBook />

        <h1>SignUp Page</h1>
        <SignUpPage />

        <h1>RGB Color Picker</h1>
        <RGBColorPicker />

      </div>
    );
  }
} 

export default App;
