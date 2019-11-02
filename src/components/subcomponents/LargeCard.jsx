import React from 'react';

var articleStyle = {
	textAlign: "center",
};

class LargeCard extends React.Component {
	render() {
		return (
			<article style={articleStyle}>
				<div className="image fit">
					<img src={this.props.image} alt="Pic 02" />
				</div>
				<header>
					<h3>{this.props.title}</h3>
				</header>
				<p>{this.props.description}.</p>
				<footer>
					<a href="#" className="button special">Coming Soon!</a>
				</footer>
			</article>
		)
	}
}

export default LargeCard;
