import React from 'react';
import './Languages.css';
import german from './images/german.png';
import english from './images/english.png';

export default function Languages() {
	return (
		<div className='langWrap'>
			<img src={german} alt='german flag' className='langBtn' />
			<img src={english} alt='english flag' className='langBtn' />
		</div>
	);
}
