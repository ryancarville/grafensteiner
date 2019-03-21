import React from 'react';
import { Link } from 'react-router-dom';
import SearchModMsg from './SearchModMsg';
import SearchBar from './SearchBar';
import './SearchModuel.css';

export default class SearchModuel extends React.Component {
	render() {
		return (
			<div className='seachModWrapper'>
				<SearchModMsg />
				<div className='searchModuel'>
					<form action='' className='searchCatag'>
						<fieldset className='searchCatag'>
							<label for='radioBtn'>Catagory</label>
							<div>
								<input
									type='checkbox'
									className='radioBtn'
									id='commercial'
									value='commercial'
								/>
								Commercial
							</div>
							<div>
								<input
									type='checkbox'
									className='radioBtn'
									id='residential'
									value='residential'
								/>
								Residential
							</div>
							<br />
						</fieldset>
						<fieldset className='searchType'>
							<label for='radioBtn'>Type</label>
							<div>
								<input
									type='checkbox'
									className='radioBtn'
									id='buy'
									value='buy'
								/>
								Buy
							</div>
							<div>
								<input
									type='checkbox'
									className='radioBtn'
									id='sell'
									value='sell'
								/>
								Sell
							</div>
							<div>
								<input
									type='checkbox'
									className='radioBtn'
									id='rent'
									value='rent'
								/>
								Rent
							</div>
						</fieldset>

						<SearchBar />

						<Link to='/results'>
							<button className='mainSearchBtn' type='submit'>
								Search
							</button>
						</Link>
					</form>
				</div>
			</div>
		);
	}
}
