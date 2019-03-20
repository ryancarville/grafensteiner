import React from 'react';
import SearchBar from './SearchBar';
import './KeywordSearch.css';
export default function KeywordSearch() {
	return (
		<form className='navSearch'>
			<button type='submit' id='keywordBtn'>
				Search
			</button>
			<SearchBar id='keywordInput' />
		</form>
	);
}
