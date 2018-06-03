import React from 'react';
import styled from 'styled-components';

export default () => (
	<Message>
		<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
		<p>When you're backed against the wall, break the god damn thing down.</p>
	</Message>
);

const Message = styled.li`
	display: inline-block;
	clear: both;
	margin: 15px 15px 5px 15px;
	width: calc(100% - 25px);
	font-size: 0.9em;
	img {
		margin: 6px 8px 0 0;
	}
	p {
		background: #435f7a;
		color: #f5f5f5;
	}
`;
