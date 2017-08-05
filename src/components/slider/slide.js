import React from 'react';
const Slide = (props) => {
  let imageURL = "dist/img/slider";
  let imageNumber = props.currentSlide;
  let extension = ".jpg";
  return(
    <div className="slide">
      <img src={imageURL + imageNumber + extension} />
    </div>
  )
}

export default Slide;