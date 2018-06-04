import React, { Component } from 'react';
import styled from 'styled-components';

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
	background-color: #293d52;
	grid-column: 1;
	color: #f5f5f5;
`;

export default Main;
