const BoxColor = (props) => {
  const {r, g, b} = props;
  const rgbToHex = function (rgb) { 
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };
  const fullColorHex = function(r,g,b) {   
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return '#'+red+green+blue;
  };
  const getContrast = function(r,g,b) {
    const luma = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	  return (luma >= 128) ? 'black' : 'white';
  }

  return (
    <div className="container" style={{textAlign:"center", backgroundColor:`rgb(${r},${g},${b})`, padding:"20px", color:getContrast(r,g,b)}}>
      <p>rgb({r}, {g}, {b})</p>
      <p>{fullColorHex(r,g,b)}</p>
    </div>
  )
}

export default BoxColor;