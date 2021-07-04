const Carousel = (props) => {
  const { picToLeft, img, picToRight} = props;
  return (
   
    <div>
      <button onClick={picToLeft}>Left</button>
      <img src={img} alt="imge" />
      <button onClick={picToRight}>Right</button>
    </div>
  )
}

export default Carousel;