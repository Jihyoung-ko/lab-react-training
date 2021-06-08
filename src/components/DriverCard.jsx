import Rating from '../components/Rating';

const DriverCard = (props) => {
  const {name, rating, img } = props;
  return (
    <div className="driverCard-container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="driver-info-container" style={{margin:"10px"}}>
        <h2 style={{margin:"0"}}>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>

    </div>
  )
}

export default DriverCard;