import React from 'react';
import './Bottom.scss';

export default () => (
	<div id="bottom-bar">
		<button id="addcontact">
			<i className="fa fa-user-plus fa-fw" aria-hidden="true" /> <span>Add contact</span>
		</button>
		<button id="settings">
			<i className="fa fa-cog fa-fw" aria-hidden="true" /> <span>Settings</span>
		</button>
	</div>
);
