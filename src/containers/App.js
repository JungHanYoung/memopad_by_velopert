import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// component
import Sidebar from './sidebar/Main';
import ChatContent from './ChatContent';

class App extends Component {
	render() {
		return (
			<section className="frame">
				<Sidebar />
				<ChatContent />
			</section>
		);
	}
}

export default hot(module)(App);
