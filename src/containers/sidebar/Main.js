import React, { Component } from 'react';

// component
import ContactProfile from '../../components/sidebar/ContactProfile';
import ContactSearch from '../../components/sidebar/ContactSearch';
import ContactList from './ContactList';

class Main extends Component {
	render() {
		return (
			<div className="sidepanel">
				<ContactProfile />
				<ContactSearch />
				<ContactList />
			</div>
		);
	}
}

export default Main;
