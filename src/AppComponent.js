import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input';
import Select from './Select';
import Table from './Table';

const CONST_STATUSES2 = [
	'program - quantities can only be changed in the first phase, for the second phase, that store will be in readonly mode',
	'local - will be open and users can input quantities',
	'NSR - store will be locked (readonly mode), and no one will be able to input any quantities'
];

const CONST_STATUSES = [
	'program',
	'local',
	'NSR'
];

const CONST_STORE_DATA = [
	{
		name: 'Store 1',
		statusIndex: 0,
		id: 1,
		products: [
			44,
			33,
			12
		] 
	},
	{
		name: 'Store 2',
		statusIndex: 0,
		id: 2,
		products: [
			44,
			33,
			12
		] 
	},
	{
		name: 'Store 3',
		statusIndex: 0,
		id: 3,
		products: [
			44,
			33,
			12
		] 
	},
	{
		name: 'Store 4',
		statusIndex: 0,
		id: 4,
		products: [
			44,
			33,
			12
		] 
	}
];

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			stores: CONST_STORE_DATA
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	handleInputChange({value, storeIndex, productIndex}) {
		const newStores = [...this.state.stores];

		newStores[storeIndex]['products'][productIndex] = value;

		this.setState(
			{
				stores: newStores
			}
		);
	}

	handleStatusChange({value, storeIndex}) {
		const newStores = [...this.state.stores];

		newStores[storeIndex]['statusIndex'] = value;

		this.setState(
			{
				stores: newStores
			}
		);
	}

	render() {
		console.log('this:', this);
		return (
            <div>
				<Table>
					{
						this.state.stores.map(
							(store, storeIndex) => (
								<tr key={store.id}>
									<td className="table-cell-expand">
										{store.name}
									</td>

									<td className="table-cell-expand">
										<Select 
											onChange={this.handleStatusChange}
											options={CONST_STATUSES}
											selectedIndex={store.statusIndex}
											storeIndex={storeIndex}
										/>
									</td>

									{store.products.map(
										(product, productIndex) => (
											<td key={productIndex + store.id} >
												<Input
													key={'input' + productIndex + store.id}
													disabled={store.statusIndex == 2}
													value={product}
													productIndex={productIndex}
													storeIndex={storeIndex}
													onChange={this.handleInputChange} />
											</td>
										)
									)}
								</tr>
							)
						)
					
					}
				</Table>
			</div>
		);
	}	
}