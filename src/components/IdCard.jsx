const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth} = props;
  return (
    <div className=" container flex">
      <div className="img-container">
        <img src={picture} alt="" />
      </div>
      <div className="info-container">
        <p><span>First name: </span>{firstName}</p>
        <p><span>Last name: </span>{lastName}</p>
        <p><span>Gender: </span>{gender}</p>
        <p><span>Height: </span>{height/100}m</p>
        <p><span>Birth: </span>{(new Date(birth)).toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard;