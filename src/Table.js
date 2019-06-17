import React from 'react';

export default class Table extends React.Component {
	render() {
		const {
			children
		} = this.props;

		return (
			<div className="table-responsive">
				<table className="table table-autofit table-hover table-list show-quick-actions-on-hover">
					<thead>
						<tr>
							<th>Store Name</th>
							<th>Status</th>
							<th>Product 1</th>
							<th>Product 2</th>
							<th>Product 3</th>
						</tr>
					</thead>
					<tbody>
						{this.props.children}
					</tbody>
				</table>
			</div>
		);
	}
}