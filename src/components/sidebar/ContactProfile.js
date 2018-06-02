import React from 'react';
import './ContactProfile.scss';

export default () => {
	return (
		<div className="profile">
			<div className="wrap">
				<img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
				<p className="profile-name">Mike Ross</p>
				<i className="fa fa-chevron-down expand-button" aria-hidden="true" />
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
			</div>
		</div>
	);
};
