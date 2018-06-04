// containers/sidebar/Main.js
import React from 'react';
import styled from 'styled-components';

export default () => {
	return (
		<SearchInputField>
			<label>
				<i className="fa fa-search" aria-hidden="true" />
			</label>
			<input type="text" placeholder="Search Contact..." />
		</SearchInputField>
	);
};

const SearchInputField = styled.div`
	border-top: 1px solid #32465a;
	border-bottom: 1px solid #32465a;
	font-weight: 300;
	label {
		position: absolute;
		margin: 10px 0 0 10px;
	}
	input {
		font-family: "proxima-nova", "Source Sans Pro", sans-serif;
		font-size: 1em;
		padding: 8px 0 10px 36px;
		width: calc(100% - 36px);
		border: none;
		background: #32465a;
		color: #f5f5f5;
		&:focus {
			outline: none;
		}
	}
`;
