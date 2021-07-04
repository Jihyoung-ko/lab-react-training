const NumbersTable = ({number}) => {
  
  return (
    
    <div className="box" style={{backgroundColor: (number % 2 === 0 ? "red" : "white")}}>
      <p>{number}</p>
    </div>
  )
}

export default NumbersTable;