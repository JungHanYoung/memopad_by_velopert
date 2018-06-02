import React, { Component } from 'react';
import './ChatContent.scss';

// components
import ContactProfile from '../components/chatContent/ContactProfile';
import Messages from '../components/chatContent/Messages';
import MessageInput from '../components/chatContent/MessageInput';

class ChatContent extends Component {
	render() {
		return (
			<div className="content">
				<ContactProfile />
				<Messages />
				<MessageInput />
			</div>
		);
	}
}

export default ChatContent;
