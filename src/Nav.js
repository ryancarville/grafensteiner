import React from 'react';
import Languages from './Languages';
import KeywordSearch from './KeywordSearch';
import logo from './images/logoWhite.png';
import './Nav.css';

export default class Nav extends React.Component {
	render() {
		return (
			<div className='navContainer'>
				<Languages />
				<KeywordSearch />
				<div className='linksWrapper'>
					<img src={logo} alt='logo' id='navLogo' />
					<ul className='navLinks'>
						<li className='navLink' id='navCommercial'>
							<a href='#' value='commercial'>
								Commercial
							</a>
						</li>
						<li className='navLink' id='navResidential'>
							<a href='#'>Residential</a>
						</li>
						<li className='navLink' id='navBio'>
							<a href='#'>About</a>
						</li>
						<li className='navLink' id='navContact'>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
