import React, { Component } from 'react';
import Moment from 'react-moment';
import {FaLinkedin} from 'react-icons/fa';

class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="inner">
					<div className="flex">
						<div className="copyright">
							<a href="#">Jordan Lee</a> | <Moment format="MMM-D-YYYY h:mma"/> <a href="#" />
						</div>
						<ul className="icons">
							<li><a href="https://www.linkedin.com/in/jordan-lee-a71933163/"><span><FaLinkedin/></span></a></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
