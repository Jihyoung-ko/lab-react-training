const ClickablePicture = (props) => {
  
  return (
    <div onClick={props.onChangePicture}>
      <img style={{height:"150px", width:"150px"}} src={props.img} alt="pic" />
    </div>
  )
}

export default ClickablePicture;