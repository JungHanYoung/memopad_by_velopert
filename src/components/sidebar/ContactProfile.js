import React from 'react';
import styled from 'styled-components';
import './ContactProfile.scss';

export default () => {
	return (
		<ProfileContainer>
			<img src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
			<ProfileName>Mike Ross</ProfileName>
			<i className="fa fa-chevron-down expand-button" aria-hidden="true" />
			<StatusOptionList active>
				<StatusOption online>
					<span className="status-circle" /> <p>Online</p>
				</StatusOption>
				<StatusOption away>
					<span className="status-circle" /> <p>Away</p>
				</StatusOption>
				<StatusOption busy>
					<span className="status-circle" /> <p>Busy</p>
				</StatusOption>
				<StatusOption offline>
					<span className="status-circle" /> <p>Offline</p>
				</StatusOption>
			</StatusOptionList>
			<div className="status-options">
				<ul>
					<li className="status-online active">
						<span className="status-circle" /> <p>Online</p>
					</li>
					<li className="status-away">
						<span className="status-circle" /> <p>Away</p>
					</li>
					<li className="status-busy">
						<span className="status-circle" /> <p>Busy</p>
					</li>
					<li className="status-offline">
						<span className="status-circle" /> <p>Offline</p>
					</li>
				</ul>
			</div>
			<div className="expanded">
				<label htmlFor="twitter">
					<i className="fa fa-facebook fa-fw" aria-hidden="true" />
				</label>
				<input name="twitter" type="text" value="mikeross" readOnly />
				<label htmlFor="twitter">
					<i className="fa fa-twitter fa-fw" aria-hidden="true" />
				</label>
				<input name="twitter" type="text" value="ross81" readOnly />
				<label htmlFor="twitter">
					<i className="fa fa-instagram fa-fw" aria-hidden="true" />
				</label>
				<input name="twitter" type="text" value="mike.ross" readOnly />
			</div>
		</ProfileContainer>
	);
};

const ProfileContainer = styled.div`
	width: 80%;
	height: 210px;
	margin: 25px auto;
	line-height: initial;
	position: relative;
	img {
		width: 50px;
		border-radius: 50%;
		padding: 3px;
		border: 2px solid #e74c3c;
		height: auto;
		float: left;
		cursor: pointer;
		-moz-transition: 0.3s border ease;
		-o-transition: 0.3s border ease;
		-webkit-transition: 0.3s border ease;
		transition: 0.3s border ease;
		@media screen and (max-width: 735px) {
			width: 40px;
			margin-left: 4px;
		}
		${(props) =>
			props.online
				? 'border: 2px solid #2ecc71;'
				: props.away
					? 'border: 2px solid #f1c40f;'
					: props.busy ? 'border: 2px solid #e74c3c;' : props.offline ? 'border: 2px solid #95a5a6;' : null};
	}
`;

const ProfileName = styled.p`
	margin-top: 20px;
	float: left;
	margin-left: 15px;
`;

const StatusOptionList = styled.ul`
	position: absolute;
	opacity: 0;
	visibility: hidden;
	width: 150px;
	margin-top: 70px;
	border-radius: 6px;
	z-index: 99;
	background: #435f7a;
	-moz-transition: 0.3s all ease;
	-o-transition: 0.3s all ease;
	-webkit-transition: 0.3s all ease;
	transition: 0.3s all ease;
	&::before {
		content: ' ';
		position: absolute;
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 8px solid #435f7a;
		margin: -8px 0 0 24px;
	}
	${(props) =>
		props.active
			? `
		opacity: 1;
		visibility: visible;
		margin-top: 75px;
	`
			: null};
`;

const StatusOption = styled.li`
	padding: 15px 0 30px 18px;
	display: block;
	cursor: pointer;
	&:hover {
		background: #496886;
		border-radius: 6px;
	}
	@media screen and (max-width: 735px) {
		width: 58px;
		margin-top: 57px;
	}
	span.status-circle {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin: 5px 0 0 0;
		&::before {
			content: '';
			position: absolute;
			width: 14px;
			height: 14px;
			margin: -3px 0 0 -3px;
			background: transparent;
			border-radius: 50%;
			z-index: 0;
			@media screen and (max-width: 735px) {
				height: 18px;
				width: 18px;
			}
		}
		${(props) =>
			props.online
				? `
		background: #2ecc71;
		&::before {
			border: 1px solid #2ecc71;
		}
		`
				: props.away
					? `
		background: #f1c40f;
		&::before {
			border: 1px solid #f1c40f;
		}
		`
					: props.busy
						? `
		background: #e74c3c;
		&::before {
			border: 1px solid #e74c3c;
		}
		`
						: props.offline
							? `
		background: #95a5a6;
						&::before {
							border: 1px solid #95a5a6;
						}
		`
							: null};
	}
	p {
		padding-left: 18px;
		padding-top: 3px;
	}
`;
