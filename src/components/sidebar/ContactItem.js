import React from 'react';
import styled from 'styled-components';
import './ContactItem.scss';

export default ({ status, profileImage, profileName, preivew }) => {
	return (
		<ContactItem>
			<ContactStatus status={status} />
			{/* props -> online, away, busy */}
			<img src={profileImage} alt="" />
			{/* image link */}
			<div className="meta">
				<p className="name">{profileName}</p>
				{/* props -> contact-name */}
				<p className="preview">{preivew}</p>
				{/* props -> contact-preview */}
			</div>
		</ContactItem>
	);
};

const ContactItem = styled.li`
	position: relative;
	width: 88%;
	margin: 0 auto;
	padding: 10px 0 15px 0;
	font-size: .9em;
	cursor: pointer;
	&:nth-last-child(1) {
		margin-bottom: 37px;
	}
	&:hover {
		background: #32465a;
	}
	${(props) =>
		props.active
			? `
	background: #32465a;
	border-right: 5px solid #435f7a;
	`
			: null} img {
		width: 40px;
		border-radius: 50%;
		float: left;
		margin-right: 10px;
		@media screen and (max-width: 735px) {
			margin-right: 0px;
		}
	}
	.meta {
		padding: 5px 0 0 0;
		@media screen and (max-width: 735px) {
			display: none;
		}
		.name {
			font-weight: 600;
		}
		.preview {
			margin: 5px 0 0 0;
			padding: 0 0 1px;
			font-weight: 400;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			-moz-transition: 1s all ease;
			-o-transition: 1s all ease;
			-webkit-transition: 1s all ease;
			transition: 1s all ease;
			span {
				position: initial;
				border-radius: initial;
				background: none;
				border: none;
				padding: 0 2px 0 0;
				margin: 0 0 0 1px;
				opacity: .5;
			}
		}
	}
`;

const ContactStatus = styled.span`
	position: absolute;
	left: 0;
	margin: -2px 0 0 -2px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 2px solid #2c3e50;
	${(props) =>
		props.status === 'online'
			? `
	background: #2ecc71;`
			: props.status === 'away'
				? `
	background: #f1c40f;`
				: props.status === 'busy'
					? `
	background: #e74c3c;`
					: `
	background: #95a5a6;`};
`;
