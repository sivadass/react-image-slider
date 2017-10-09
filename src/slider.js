import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			slides : this.props.children,
			currentSlide: 0
		}
		this.slideInterval = this.slideInterval.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.renderChild = this.renderChild.bind(this);
	}
	componentDidMount(){
		this.slideInterval();
	}
	slideInterval(){
		setInterval(this.nextSlide, 1500);
	}
	nextSlide(){
		let nextSlideItem = (this.state.currentSlide + 1) % this.state.slides.length;
		this.setState({
			currentSlide: nextSlideItem
		})
	}
	renderChild(){
		return (
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={1000}
				transitionLeaveTimeout={1000}
				component="ul"
				key={this.state.currentSlide}>
					{this.props.children[this.state.currentSlide]}
			</ReactCSSTransitionGroup>
    );
	}
	render(){
		console.log();
		return(
			<div>
				{this.renderChild()}
			</div>
		)
	}
}

export default Slider;