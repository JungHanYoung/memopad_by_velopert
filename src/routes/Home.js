import React, { Component } from 'react';

import Sidebar from '../containers/sidebar/Main';
import ChatContent from '../containers/ChatContent';

class Home extends Component {
	render() {
		return (
			<section className="frame">
				<Sidebar />
				<ChatContent />
			</section>
		);
	}
}

export default Home;
