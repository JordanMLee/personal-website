import React from 'react';

class Card extends React.Component {

	render() {
		return	(
			<div className="box person">
				<a href={this.props.link}/>
				<div className="image round">
					<img src={this.props.image} alt="Person 1" />
				</div>
				<h3>{this.props.name != null ? this.props.name : "Random Dev" }</h3>
				<p>{this.props.description != null ? this.props.description : "Just ask the Guru!"}</p>
				<div>
					<a href={this.props.link} className="button">{this.props.buttonLabel}</a>
				</div>
			</div>
		)
	}
}

export default Card;
