import React from 'react';
import { Link } from 'react-router-dom';
import Languages from './Languages';
import KeywordSearch from './KeywordSearch';
import logo from './images/logoWhite.png';
import './Nav.css';

const Nav = () => (
	<nav className='navContainer'>
		<Languages />
		<KeywordSearch />
		<div className='linksWrapper'>
			<img src={logo} alt='logo' id='navLogo' />
			<ul className='navLinks'>
				<li className='navLink' id='navCommercial'>
					<Link to='/com'>Commercial</Link>
				</li>
				<li className='navLink' id='navResidential'>
					<Link to='/res'>Residential</Link>
				</li>
				<li className='navLink' id='navBio'>
					<Link to='/about'>About</Link>
				</li>
				<li className='navLink' id='navContact'>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Nav;
