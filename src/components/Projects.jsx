import React, {Component} from 'react';

import Card from './subcomponents/Card';

import selfie from "../images/selfie.jpg";
import python from "../images/python-logo-450w.png";
import react_logo from "../images/React.js_logo-512.png";
import gym from "../images/gym.jpg";

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			pictures: {

				jordan:selfie,
				python:python,
				react_logo:react_logo,
				gym:gym,
			}
		}
	}

	render() {
		return (
			<section id="two" className="wrapper style1 special">
				<div className="inner">
					<header>
						<h2>My Personal Projects</h2>
						<p>I really like to code cool things</p>
					</header>
					<div className="flex flex-4">
						<Card image={this.state.pictures.jordan} name={"Jordan"} description={"this is my personal bio"}/>
						<Card image={this.state.pictures.python} name={"Machine Learninig projects"} description={"Examples of my data analytics skills"}/>
						<Card image={this.state.pictures.react_logo} name={"React projects"} description={"Check them out here!"}/>
						<Card image={this.state.pictures.gym} name={"Hobbies"} description={"some action shots over the years"}/>

					</div>
				</div>
			</section>

		);
	}
}
export default Projects;
