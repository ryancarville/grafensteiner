import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import Results from './Results';
import './KeywordSearch.css';
export default function KeywordSearch() {
	return (
		<form className='navSearch'>
			<SearchBar />

			<Link to='/results'>
				<button type='button' id='keywordBtn' onClick={Results}>
					Search
				</button>
			</Link>
		</form>
	);
}
