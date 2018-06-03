import React from 'react';
import styled from 'styled-components';

export default () => (
	<Header>
		<Profile>
			<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			<p>Harvey Specter</p>
			<SocialMedia>
				<i className="fa fa-facebook" aria-hidden="true" />
				<i className="fa fa-twitter" aria-hidden="true" />
				<i className="fa fa-instagram" aria-hidden="true" />
			</SocialMedia>
		</Profile>
	</Header>
);

const Header = styled.div`
	background: #ffffff;
	border-bottom: 1px solid #f2f2f2;
	color: #444;
	grid-row: 1;
	div {
		height: 60px;
		line-height: 60px;
		background: #f5f5f5;
	}
`;

const Profile = styled.div`
	width: 100%;
	height: 60px;
	line-height: 60px;
	background: #f5f5f5;
	img {
		width: 40px;
		border-radius: 50%;
		float: left;
		margin: 9px 12px 0 9px;
	}
	p {
		float: left;
	}
`;

const SocialMedia = styled.div`
	float: right;
	i {
		margin-left: 14px;
		cursor: pointer;
		&:nth-last-child(1) {
			margin-right: 20px;
		}
		&:hover {
			color: #435f7a;
		}
	}
`;
