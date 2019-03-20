import React from 'react';

import './SearchItem.css';

export default function SearchItem(props) {
	return (
		<div className='searchItem'>
			<img
				src={require('./images/listings/' + props.image)}
				alt={'image of: ' + props.name}
				className='searchImg'
			/>
			<p>
				Property name: {props.name}
				<br />
				Address: {props.address}
				<br />
				City: {props.city}
				<br />
				Canton: {props.canton}
				<br />
				Price: {props.price}
				<br />
				<a href={props.link}>Link</a>
			</p>
		</div>
	);
}
