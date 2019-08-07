import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Streamy
			</Link>
			<div className="right menu" />
			<Link to="/" className="item">
				All Streams
			</Link>

			<GoogleAuth />
		</div>
	);
};

export default Header;

//736308360558-ilhtfcfll5r20jdeh3mi37atisg0ae3o.apps.googleusercontent.com
