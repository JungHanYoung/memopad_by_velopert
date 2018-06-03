import React, { Component } from 'react';
import styled from 'styled-components';
import './Main.scss';

// component
import ContactProfile from '../../components/sidebar/ContactProfile';
import ContactSearch from '../../components/sidebar/ContactSearch';
import ContactBottom from '../../components/sidebar/Bottom';
import ContactList from './ContactList';

class Main extends Component {
	render() {
		return (
			<Container>
				<ContactProfile />
				<ContactSearch />
				<ContactList />
				<ContactBottom />
			</Container>
		);
	}
}

const Container = styled.div`
	position: relative;
	background-color: #362233;
	grid-column: 1;
`;

export default Main;
