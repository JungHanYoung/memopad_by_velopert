import React from 'react';
import './ContactItem.scss';

export default ({ status, profileImage, profileName, preivew }) => {
	return (
		<li className="contact">
			<div className="wrap">
				<span className={`contact-status ${status !== 'offline' ? status : null}`} />
				{/* props -> online, away, busy */}
				<img src={profileImage} alt="" />
				{/* image link */}
				<div className="meta">
					<p className="name">{profileName}</p>
					{/* props -> contact-name */}
					<p className="preview">{preivew}</p>
					{/* props -> contact-preview */}
				</div>
			</div>
		</li>
	);
};
