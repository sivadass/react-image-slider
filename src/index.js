import React from 'react';
import ReactDOM from 'react-dom';
import './styles/slider.scss';

import Slider from './slider';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentSlide : 0
    }
  }

  render(){
    return(
      <Slider>
        <li className="slider-item">
					<img src="dist/img/slider1.jpg" />
				</li>
				<li className="slider-item">
					<img src="dist/img/slider2.jpg" />
				</li>
				<li className="slider-item">
					<img src="dist/img/slider3.jpg" />
				</li>
      </Slider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
