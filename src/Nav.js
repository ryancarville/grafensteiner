import React from 'react';
import { Link } from 'react-router-dom';
import Languages from './Languages';

import logo from './images/logoWhite.png';
import './Nav.css';

class Nav extends React.Component {
	render() {
		return (
			<nav className='navContainer'>
				<Languages />

				<div className='linksWrapper'>
					<Link to='/'>
						<img src={logo} alt='logo' id='navLogo' />
					</Link>
					<ul className='navLinks'>
						<li className='navLink' id='navCommercial'>
							<Link to='/commercial'>Commercial</Link>
						</li>
						<li className='navLink' id='navResidential'>
							<Link to='/residential'>Residential</Link>
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
	}
}

export default Nav;
