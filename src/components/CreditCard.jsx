const CreditCard = (props) => {
  const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
  const getLogo = function(type) {
    return type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
  }
  
  return (  
    <div className="credit-card" style={{backgroundColor:bgColor, color: color}}>
      <div className="bank-logo" style={{textAlign:"right"}}>
        <img src={getLogo(type)} alt="logo" style={{height:"20px"}}/>
      </div>
      <div className="card-number">
        <h1 style={{fontWeight:"400", textAlign:"center"}}>•••• •••• •••• {number.substring(12)}</h1>
      </div>
      <div className="card info">
        <p><span>Expires {expirationMonth}/{expirationYear}</span> <span style={{marginLeft:"20px"}}>{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div> 
  )
}

export default CreditCard;