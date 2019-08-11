import React, {Component} from 'react';
import Article from './subcomponents/Article';

class Section extends Component {
	constructor(){
		super();
		this.state = {
			location: ["two","three","four"],
			specialities: ["Software Development", "Data Analytics", "Cloud Migration"],
			descriptions:[
				"I am a software developer at heart. I enjoy writing clean code, working with others to solve problems and delivering eloquent solutions. I own my work from concept to completion.",
				"Data-driven analytics is crucial to maintaining a competitive advantage in the global market. I will help you extract meaningful insights with powerful machine learning techniques. Put my education to work.",
				"Having trouble migrating to the cloud? Let me show you how its done! All of my work is cloud-native so I am very familiar with its ins and outs. Let's chat about the way forward."
			],
		}
	}

	render() {
		return(
			<section id="one" className="wrapper">
				<div className="inner">
					<div className="flex flex-3">
						<Article location={this.state.location[0] } topic={this.state.specialities[0]} description={this.state.descriptions[0]}/>
						<Article location={this.state.location[1]} topic={this.state.specialities[1]} description={this.state.descriptions[1]}/>
						<Article location={this.state.location[2]} topic={this.state.specialities[2]} description={this.state.descriptions[2]}/>
					</div>
				</div>
			</section>

		)
	}
}
export default Section;
