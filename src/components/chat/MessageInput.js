import React, { Component } from 'react';
import styled from 'styled-components';

class MessageInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			send: ''
		};
		this._onInputChange = this._onInputChange.bind(this);
	}
	_onInputChange(e) {
		this.setState({
			send: e.target.value
		});
	}
	render() {
		const { send } = this.state;
		return (
			<InputField>
				<input type="text" placeholder="Send Message" value={send} onChange={this._onInputChange} />
				<button>
					<i className="fa fa-paper-plane" aria-hidden="true" />
				</button>
			</InputField>
		);
	}
}

const InputField = styled.div`
	grid-row: 3;
	display: grid;
	grid-template-columns: 1fr auto;
	input {
		padding: 11px 32px 10px 8px;
		font-size: 0.8em;
		color: #32465a;
		outline: none;
		border: 1px solid #f2f2f2;
		&:focus {
			outline: none;
		}
	}
	button {
		border: none;
		width: 50px;
		padding: 12px 0;
		cursor: pointer;
		background: #32465a;
		color: #f5f5f5;
		@media screen and (max-width: 735px) {
			padding: 16px 0;
		}
		&:hover {
			background: #435f7a;
		}
		&:focus {
			outline: none;
		}
	}
`;

export default MessageInput;
