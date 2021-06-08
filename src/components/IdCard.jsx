const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth} = props;
  return (
    <div className="id-card container">
      <div className="img-container">
        <img src={picture} alt="" />
      </div>
      <div className="info-container">
        <p><span className="bold">First name: </span>{firstName}</p>
        <p><span className="bold">Last name: </span>{lastName}</p>
        <p><span className="bold">Gender: </span>{gender}</p>
        <p><span className="bold">Height: </span>{height/100}m</p>
        <p><span className="bold">Birth: </span>{(new Date(birth)).toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard;