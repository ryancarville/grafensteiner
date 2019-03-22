import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import Results from './Results';
import './KeywordSearch.css';
export default function KeywordSearch() {
	return (
		<div className='headerSearch'>
			<form className='navSearch'>
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
				<SearchBar />
				<Link to='/results'>
					<button type='button' id='keywordBtn' onClick={Results}>
						Search
					</button>
				</Link>
			</form>
		</div>
	);
}
