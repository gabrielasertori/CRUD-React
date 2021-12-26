import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export function ReadForm() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData`)
			.then((res) => {setData(res.data)})
	}, [])

	return (
		<Table singleLine>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Name</Table.HeaderCell>
					<Table.HeaderCell>Email</Table.HeaderCell>
					<Table.HeaderCell>Subscribed</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
			{data.map((entry) => {
				return (
				<Table.Row key={entry.id}>
					<Table.Cell>{entry.firstName}</Table.Cell>
					<Table.Cell>{entry.email}</Table.Cell>
					<Table.Cell>{entry.subscribe ? 'Yes' : 'No'}</Table.Cell>
				</Table.Row>
				)
			})}
			</Table.Body>
		</Table>
	)
}
