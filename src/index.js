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
      <div className="">
        <Slider />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
