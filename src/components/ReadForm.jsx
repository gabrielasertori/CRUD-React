import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { Table, TableCell, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function ReadForm() {
	const [data, setData] = useState([]);

	const getData = () => {
		axios.get(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData`)
			.then((res) => {setData(res.data)})
	}

	useEffect(() => {
		getData();
	}, [])

	const handleKeepData = (data) => {
		let { id, firstName, email, subscribe } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Subscribe', subscribe);
	}

	const handleDelData = (data) => {
		axios.delete(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData/${data.id}`)
			.then(() => {
				getData()
			})
	}

	return (
		<Table singleLine>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Name</Table.HeaderCell>
					<Table.HeaderCell>Email</Table.HeaderCell>
					<Table.HeaderCell>Subscribed</Table.HeaderCell>
					<Table.HeaderCell>Update</Table.HeaderCell>
					<Table.HeaderCell>Delete</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
			{data.map((entry) => {
				return (
				<Table.Row key={entry.id}>
					<Table.Cell>{entry.firstName}</Table.Cell>
					<Table.Cell>{entry.email}</Table.Cell>
					<Table.Cell>{entry.subscribe ? 'Yes' : 'No'}</Table.Cell>
					<TableCell>
						<Link to="/update">
							<Button onClick={() => handleKeepData(entry)}>Update</Button>
						</Link>
					</TableCell>
					<TableCell>
						<Button onClick={() => handleDelData(entry)}>Delete</Button>
					</TableCell>
				</Table.Row>
				)
			})}
			</Table.Body>
		</Table>
	)
}
