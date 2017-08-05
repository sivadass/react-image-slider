import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/slider';

const css = require('./stylesheets/style.scss');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="wrapper">
        <header>
          <h1>React Image Slider</h1>
          <p>A minimal react image carousel component.</p>
        </header>
        <Slider />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
