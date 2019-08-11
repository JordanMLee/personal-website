import React, {Component} from 'react';

class Article extends Component {
	render() {
		return (
			<article>
				<header>
					<a href={`#${this.props.location}`}><h3>{this.props.topic}</h3></a>
					{/*<h3>{this.props.topic}</h3>*/}
				</header>
				<p>{this.props.description}</p>
				{/*<footer>*/}
				{/*	<a href={`#${this.props.location}`} className="button special">More</a>*/}
				{/*</footer>*/}
			</article>
		);
	}
}

export default Article;
