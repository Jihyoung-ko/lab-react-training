const Rating =(props) => {
  const {children} = props;
  const emptyStar = "☆";
  const filledStar ="★";
  const maxStarNumber = 5;
  const roundNumber = function (number) {
    return Math.round(number);
  }
  return (
    <div className="rating-container">
      <p style={{fontSize:"2rem"}}>{filledStar.repeat(roundNumber(children))}{emptyStar.repeat(maxStarNumber - roundNumber(children))}</p>
    </div>
  )
}

export default Rating;