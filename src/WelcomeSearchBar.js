import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomeSearchBar.css';

const homeSearchBar = () => (
	<div className='homeSearchModuel'>
		<form action='' className='homeSearchCatag'>
			<Link to='/results'>
				<button type='submit' className='homeSearchBtn'>
					Search
				</button>
				<input
					className='homeSearchInput'
					type='text'
					placeholder='Enter Search Here'
				/>
			</Link>

			<select id='catagoryMenu'>
				<optgroup label='catagory'>
					<option value=''>Select a Catagory</option>
					<option value='commercial'>Commercial</option>
					<option value='residential'>Residential</option>
				</optgroup>
			</select>
			<select id='typeMenu'>
				<optgroup label='type'>
					<option value=''>Select a Type</option>
					<option value='buy'>Buy</option>
					<option value='rent'>Rent</option>
					<option value='sell'>Sell</option>
				</optgroup>
			</select>
		</form>
	</div>
);

export default homeSearchBar;
