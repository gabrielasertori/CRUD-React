import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableCell, Button } from 'semantic-ui-react';
import { AiFillPlusCircle, AiFillHome } from 'react-icons/ai';
import { Bg, Display, Card } from './Styles';

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
		<Bg>
			<Display>
				<Link to="/">
					<Card>
						<div><AiFillHome style={{ fontSize: '24px', color: '#08c' }}/></div>
						<span>Home</span>
					</Card>
				</Link>
				<Link to="/create">
					<Card>
						<div><AiFillPlusCircle style={{ fontSize: '24px', color: '#08c' }}/></div>
						<span>New credential</span>
					</Card>
				</Link>
			</Display>
			<Table striped>
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
								<Button style={{ fontSize: '14px', backgroundColor: '#44e467' }} onClick={() => handleKeepData(entry)}>Update</Button>
							</Link>
						</TableCell>
						<TableCell>
							<Button style={{ fontSize: '14px', backgroundColor: '#e04c38' }} onClick={() => handleDelData(entry)}>Delete</Button>
						</TableCell>
					</Table.Row>
					)
				})}
				</Table.Body>
			</Table>
		</Bg>
	)
}
