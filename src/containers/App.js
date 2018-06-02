import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// component
import Sidebar from './sidebar/Main';

class App extends Component {
	render() {
		return (
			<section className="frame">
				<h1>Hello Chat</h1>
				<Sidebar />
			</section>
		);
	}
}

export default hot(module)(App);
