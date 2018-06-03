import React from 'react';
import styled from 'styled-components';

export default () => (
	<Message>
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
	img {
		margin: 6px 0 0 8px;
		float: right;
	}
	p {
		background: #f5f5f5;
		float: right;
	}
`;
