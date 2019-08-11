import React, { Component } from 'react';
import Moment from 'react-moment';
import {FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaVimeo} from 'react-icons/fa';

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
							<li><a href="#" ><span><FaFacebook/></span></a></li>
							<li><a href="#"><span><FaLinkedin/></span></a></li>
							<li><a href="#"><span><FaTwitter/></span></a></li>
							<li><a href="#"><span><FaPinterest/></span></a></li>
							<li><a href="#"><span><FaVimeo/></span></a></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
