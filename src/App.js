import React, { Component } from 'react';
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Section from './components/Section'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Midsection from './components/Midsection';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Banner/>
				<Section/>
				<Projects/>
				<Midsection/>
				<Footer/>
			</div>
		);
	}
}

export default App;
