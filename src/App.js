import React, { Component } from 'react';
import DataCounter from './DataCounter';
import SearchModuel from './SearchModuel';
import Nav from './Nav';
import Welcome from './Welcome';
import './App.css';
import Search from './Search';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<Nav />
				</header>
				<main>
					<section>
						<Welcome />
					</section>
					<section>
						<SearchModuel />
					</section>
					<section>
						<DataCounter />
					</section>
					<section>
						<Search />
					</section>
				</main>
			</div>
		);
	}
}

export default App;
