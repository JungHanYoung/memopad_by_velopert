import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// component
import Home from '../routes/Home';
import Chat from '../routes/Chat';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/chat" component={Chat} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default hot(module)(App);
