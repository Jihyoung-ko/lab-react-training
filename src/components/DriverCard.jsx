import Rating from '../components/Rating';

const DriverCard = (props) => {
  const {name, rating, img, car} = props;
  return (
    <div className="driverCard-container">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="driver-info-container" style={{margin:"10px"}}>
        <h2 style={{margin:"0"}}>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>

    </div>
  )
}

export default DriverCard;