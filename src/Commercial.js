import React from 'react';
import './Commercial.css';
import Content from './Content';
import SearchModuel from './SearchModuel';

class Commercial extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<>
				<section>
					<div className='commercialPage'>
						<SearchModuel className='commercialSearch' />
						<Content />
						<div className='commercialMsg'>
							<h2>Commercial Real Estate is in out blood!</h2>
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum."
							</p>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Commercial;
