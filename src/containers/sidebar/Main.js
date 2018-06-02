import React, { Component } from 'react';
import './Main.scss';

// component
import ContactProfile from '../../components/sidebar/ContactProfile';
import ContactSearch from '../../components/sidebar/ContactSearch';
import ContactBottom from '../../components/sidebar/Bottom';
import ContactList from './ContactList';

class Main extends Component {
	render() {
		return (
			<div className="sidepanel">
				<ContactProfile />
				<ContactSearch />
				<ContactList />
				<ContactBottom />
			</div>
		);
	}
}

export default Main;
