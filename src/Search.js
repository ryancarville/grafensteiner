import React from 'react';
import SearchItem from './SearchItem';
import Properties from './Propertires';
import './Search.css';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = Properties;
	}

	render() {
		return (
			<>
				<div className='resultsCounter'>
					<header>
						<h2>4 Properties for you</h2>
					</header>
				</div>
				<div className='seachResults'>
					{this.state.map(listing => (
						<SearchItem
							id={listing.id}
							name={listing.name}
							address={listing.address}
							city={listing.city}
							canton={listing.canton}
							size={listing.size}
							price={listing.price}
							link={listing.link}
							image={listing.image}
						/>
					))}
				</div>
			</>
		);
	}
}
