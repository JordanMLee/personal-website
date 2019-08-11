import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<header id="header">
				<div className="inner">
					<a href="index.html" className="logo"></a>
					{/*<nav id="nav">*/}
					{/*	<a href="#">Generics</a>*/}
					{/*	<a href="#">Elements</a>*/}
					{/*	<a href="#">Random</a>*/}
					{/*	<a href="#">Contact</a>*/}
					{/*</nav>*/}
					<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
				</div>
			</header>

		);
	}
}

export default Header;
