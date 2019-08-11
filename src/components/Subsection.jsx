import React, { Component } from 'react';
import { FaCloudDownloadAlt, FaCogs, FaWrench } from 'react-icons/fa';
import Article from './subcomponents/Article';

class Subsection extends Component {
	render() {
		return (
			<section id="four" className="wrapper style2 special">
				<div className="inner">
					<header className="align-center">
						<h2>Are you ready for the next digital transformation? </h2>
						<span className="byline">Click the links below for more information</span>
					</header>
					<div className="flex flex-3">
						<Article  topic={<FaCogs />} description={	<p> Etiam neque. Vivamus consequat lorem at nisl. Nullam wisi a sem semper eleifend. Donec mattis.</p>}/>
						<Article topic={<FaCloudDownloadAlt />} description={	<p> Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad torquent per conubia nostra.</p>}/>
						<Article  topic={<FaWrench />} description={	<p> Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus.</p>}/>
					</div>
				</div>
			</section>
		);
	}

}

export default Subsection;
