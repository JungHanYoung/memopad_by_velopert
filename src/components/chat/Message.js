import React from 'react';
import styled from 'styled-components';

export default (props) => (
	<Message {...props}>
		<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
		<p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
	</Message>
);

const Message = styled.li`
	display: inline-block;
	clear: both;
	margin: 15px 15px 5px 15px;
	width: calc(100% - 25px);
	font-size: 0.9em;
	&:nth-last-child(1) {
		margin-bottom: 20px;
	}
	img {
		width: 22px;
		border-radius: 50%;
		float: left;
	}
	p {
		display: inline-block;
		padding: 10px 15px;
		border-radius: 20px;
		max-width: 205px;
		line-height: 130%;
		@media screen and (min-width: 735px) {
			max-width: 300px;
		}
	}
	${(props) =>
		props.reply
			? `
    img {
		margin: 6px 0 0 8px;
		float: right;
	}
	p {
		background: #f5f5f5;
		float: right;
	}
    `
			: null} ${(props) =>
			props.sent
				? `
    img {
		margin: 6px 8px 0 0;
	}
	p {
		background: #435f7a;
		color: #f5f5f5;
	}
    `
				: null};
`;
