import React, { Component } from 'react';
import './ContactList.scss';

// component
import ContactItem from '../../components/sidebar/ContactItem';

class ContactList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactList: [
				{
					status: 'online',
					profileImage: 'http://emilcarlsson.se/assets/louislitt.png',
					profileName: 'Louis Litt',
					preivew: 'You just got LITT up, Mike.'
				},
				{
					status: 'busy',
					profileImage: 'http://emilcarlsson.se/assets/harveyspecter.png',
					profileName: 'Harvey Specter',
					preivew:
						'Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.'
				},
				{
					status: 'away',
					profileImage: 'http://emilcarlsson.se/assets/rachelzane.png',
					profileName: 'Rachel Zane',
					preivew: 'I was thinking that we could have chicken tonight, sounds good?'
				},
				{
					status: 'online',
					profileImage: 'http://emilcarlsson.se/assets/donnapaulsen.png',
					profileName: 'Donna Paulsen',
					preivew: "Mike, I know everything! I'm Donna.."
				},
				{
					status: 'busy',
					profileImage: 'http://emilcarlsson.se/assets/jessicapearson.png',
					profileName: 'Jessica Pearson',
					preivew: 'Have you finished the draft on the Hinsenburg deal?'
				},
				{
					status: 'offline',
					profileImage: 'http://emilcarlsson.se/assets/haroldgunderson.png',
					profileName: 'Harold Gunderson',
					preivew: 'Thanks Mike! :)'
				},
				{
					status: 'offline',
					profileImage: 'http://emilcarlsson.se/assets/danielhardman.png',
					profileName: 'Daniel Hardman',
					preivew: "We'll meet again, Mike. Tell Jessica I said 'Hi'."
				},
				{
					status: 'busy',
					profileImage: 'http://emilcarlsson.se/assets/katrinabennett.png',
					profileName: 'Katrina Bennett',
					preivew: "I've sent you the files for the Garrett trial."
				},
				{
					status: 'busy',
					profileImage: 'http://emilcarlsson.se/assets/katrinabennett.png',
					profileName: 'Katrina Bennett',
					preivew: "I've sent you the files for the Garrett trial."
				}
			]
		};
	}
	render() {
		const { contactList } = this.state;
		return (
			<div className="contacts">
				<ul>{contactList.map((contactItem, index) => <ContactItem key={index} {...contactItem} />)}</ul>
			</div>
		);
	}
}

export default ContactList;
