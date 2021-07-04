const SingleColorPicker = ({ color, value, handleValue}) => {

  const background = (color) => {
    if(color === "r") {
      return "red";
    } else if( color === "g") {
      return "green";
    } else {
      return "blue";
    }
  }
  return (
    <div className="color-picker flex">
        <div className="box" style={{backgroundColor:background(color), marginBottom:"10px"}} ></div>
        <p>{color.toUpperCase()}: </p>
        <input type="number" min="0" max="255" value={value} onChange={handleValue} style={{height:"20px", margin:"auto 0px"}} />
    </div>
  )
}

export default SingleColorPicker;