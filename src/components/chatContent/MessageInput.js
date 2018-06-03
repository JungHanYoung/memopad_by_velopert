import React from 'react';

export default () => (
	<div className="message-input">
		<div className="wrap">
			<input type="text" placeholder="Write your message..." />
			<button className="submit">
				<i className="fa fa-paper-plane" aria-hidden="true" />
			</button>
		</div>
	</div>
);
