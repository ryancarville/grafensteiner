import React, { Component } from 'react';
import './RangeSlider.css';
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider';

// To include the default styles
import 'react-rangeslider/lib/index.css';

export default class VolumeSlider extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			volume: 0
		};
	}
	handleOnChange = value => {
		this.setState({
			volume: value
		});
	};

	render() {
		let { volume } = this.state;
		return (
			<Slider
				className='slider'
				value={volume}
				orientation='horizontal'
				onChange={this.handleOnChange}
			/>
		);
	}
}
