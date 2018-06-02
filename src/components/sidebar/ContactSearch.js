// containers/sidebar/Main.js
import React from 'react';
import './ContactSearch.scss';

export default () => {
	return (
		<div className="search">
			<label>
				<i className="fa fa-search" aria-hidden="true" />
			</label>
			<input type="text" placeholder="Search Contact..." />
		</div>
	);
};
