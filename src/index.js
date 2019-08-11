import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Filler from './components/Dummypage';
import NotFound from './components/Notfound';

// import "bootstrap/dist/js/bootstrap"
// import "popper.js/dist/popper";
// import "jquery/dist/jquery";

import "react-fontawesome";

const routing = (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route path="/test" component={Filler}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
