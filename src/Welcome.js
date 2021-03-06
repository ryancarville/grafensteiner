import React from 'react';
import DataCounter from './DataCounter';
import WelcomeSearchBar from './WelcomeSearchBar';
import './Welcome.css';

export default class Welcome extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<>
				<div className='welcome'>
					<div className='welcomeMsg'>
						<h2>Welcome!</h2>
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</p>
					</div>
					<DataCounter />
				</div>
			</>
		);
	}
}
