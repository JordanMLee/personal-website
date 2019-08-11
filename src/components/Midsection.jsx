import React, { Component } from 'react';
import LargeCard from './subcomponents/LargeCard';
import coding from '../images/coding.jpg';
import data from '../images/data.jpg';


class Midsection extends Component {
	constructor(props) {
		super(props);
		this.state={
			pictures: {
				coding: coding,
				data:data,
			},
			title1: "Coding Articles",
			description1: "a list of coding articles I find very useful...",
			title2: "Data Articles",
			description2: "a list of machine learning and data articles I find interesting",
		}
	}

	render() {
		return (
			<section id="three" className="wrapper special">
				<div className="inner">
					<header className="align-center">
						<h2>Data Is Everything</h2>
						<p>Let learn new things together!</p>
					</header>
					<div className="flex flex-2">
						<LargeCard image={this.state.pictures.coding} title={this.state.title1} description={this.state.description1}/>
						<LargeCard image={this.state.pictures.data} title={this.state.title2} description={this.state.description2} />
					</div>
				</div>
			</section>

		);
	}
 }
 export default Midsection;
