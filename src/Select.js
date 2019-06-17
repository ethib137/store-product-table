import React from 'react';

export default class Select extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const {
			onChange,
			storeIndex
		} = this.props;

		event.preventDefault()

		onChange(
			{
				value: parseInt(event.currentTarget.value),
				storeIndex
			}
		);
	}

	render() {
		const {
			options,
			selectedIndex,
			type
		} = this.props;

		return (
			<select className="form-control" onChange={this.handleChange} value={selectedIndex}>
				{
					options.map(
						(option, i) => (
							<option key={i} value={i}>{option}</option>
						)
					)
				}
			</select>
		);
	}
}