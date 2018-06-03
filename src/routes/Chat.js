import React, { Component } from 'react';
import styled from 'styled-components';
import './Chat.scss';

import SideBar from '../containers/sidebar/Main';
import MessageHeader from '../components/chat/Header';
import SentMessage from '../components/chat/SentMessage';
import ReplyMessage from '../components/chat/ReplyMessage';
import Message from '../components/chat/Message';
import MessageInput from '../components/chat/MessageInput';

class Chat extends Component {
	render() {
		return (
			<AppLayout>
				<SideBar />
				<MessagesContainer>
					<MessageHeader>Header</MessageHeader>
					<Messages>
						<ul>
							<Message reply />
							<Message sent />
							<Message reply />
							<Message sent />
							<Message reply />
							<Message sent />
							<Message reply />
							<Message sent />
							<Message reply />
							<Message sent />
						</ul>
					</Messages>
					<MessageInput />
				</MessagesContainer>

				{/* <div class="teams box">Teams</div>
				<div class="header box">Header</div>
				<div class="messages box">
					<ul class="message-list">
						<li />
						<li />
						<li />
						<li />
						<li />
					</ul>
				</div>
				<div class="input box">
					<input type="text" placeholder="Have you tried the CSS Grid Layout Module?" />
				</div> */}
			</AppLayout>
		);
	}
}

const AppLayout = styled.div`
	display: grid;
	height: 100vh;
	grid-template-columns: 320px 1fr;
	@media (max-width: 960px) {
		background: palevioletred;
	}
`;

const MessagesContainer = styled.div`
	box-sizing: border-box;
	background-color: #ffffff;
	grid-column: 2;
	display: grid;
	grid-template-rows: auto 1fr auto;
	margin: 0;
	overflow-y: scroll;
`;

const Messages = styled.div`
	background: #fff;
	grid-row: 2;
	padding: 0 1em;
	overflow-y: scroll;
`;

export default Chat;
