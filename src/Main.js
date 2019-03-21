import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import './Welcome.css';
import Commercial from './Commercial';
import Residential from './Residential';
import About from './About';
import Contact from './Contact';
import Results from './Results';
import Footer from './Footer';
import './Main.css';

const Main = () => (
	<>
		<main className='main'>
			<Switch>
				<Route exact path='/' component={Welcome} />
				<Route exact path='/commercial' component={Commercial} />
				<Route exact path='/residential' component={Residential} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/results' component={Results} />
			</Switch>
		</main>
		<Footer />
	</>
);
export default Main;
