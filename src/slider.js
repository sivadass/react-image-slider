import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			slides : this.props.children,
			currentSlide: 2
		}
		this.slideInterval = this.slideInterval.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.renderChild = this.renderChild.bind(this);
	}
	componentDidMount(){
		this.slideInterval();
	}
	slideInterval(){
		setInterval(this.nextSlide, 5000);
	}
	nextSlide(){
		let nextSlideItem = (this.state.currentSlide + 1) % this.state.slides.length;
		this.setState({
			currentSlide: nextSlideItem
		}, function(){
			console.log(this.state.currentSlide)
		})
	}
	renderChild(){
		return (
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
				component="ul">
					{this.props.children[this.state.currentSlide]}
			</ReactCSSTransitionGroup>
    );
	}
	render(){
		console.log();
		return(
			<div className="one">
				{this.renderChild()}
			</div>
		)
	}
}

export default Slider;