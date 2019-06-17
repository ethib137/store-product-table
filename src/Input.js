import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const {
			onChange,
			productIndex,
			storeIndex
		} = this.props;

		event.preventDefault()

		onChange(
			{
				value: event.currentTarget.value,
				storeIndex,
				productIndex
			}
		);
	}

	render() {
		const {
			disabled,
			type,
			value
		} = this.props;

		return <input
			disabled={disabled}
			onChange={this.handleChange}
			type={type}
			value={value}
		/>;
	}
}

Input.defaultProps = {
	type: 'text'
};