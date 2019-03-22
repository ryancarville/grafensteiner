import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
	return (
		<form action=''>
			<input
				className='mainSearchInput'
				type='text'
				placeholder='Enter Search Here'
			/>
		</form>
	);
}
