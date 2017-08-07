import React from 'react';
import Slide from './slide';

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      totalSlides: 3,
      currentSlide: 1
    };
    this.handleNextButton = this.handleNextButton.bind(this);
		this.handlePrevButton = this.handlePrevButton.bind(this);
  }
  // Next Button
	handleNextButton(event){
    event.preventDefault();
    if(this.state.currentSlide < 3){
      this.setState({
        currentSlide: this.state.currentSlide + 1
      })
    } else{
      this.setState({
        currentSlide: 1
      })
    }
  }
	// Previous Button
	handlePrevButton(event){
    event.preventDefault();
    if(this.state.currentSlide == 1 ){
      this.setState({
        currentSlide: 3
      })
    } else{
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
  }
  render(){
    console.log(this.props.children);
    return(
      <div className="slider">
        <div className="slider-viewport">
          <Slide currentSlide={this.state.currentSlide}/>
        </div>
        <div className="slider-controls">
          <a className="prev-button" href="#" onClick={this.handlePrevButton}></a>
          <a className="next-button" href="#" onClick={this.handleNextButton}></a>
        </div>
      </div>
    )
  }
}

export default Slider;