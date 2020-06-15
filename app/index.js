import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";

const App = () => {
    return(
        <Router>
			<Switch>
				<Route path="/:country">
					<Country/>
				</Route>

				<Route path="/">
					<Home />
				</Route>				
        	</Switch>
		</Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'))
