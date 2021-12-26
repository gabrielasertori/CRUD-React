import React, { useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';

export function UpdateForm() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [subscribe, setSubscribe] = useState(true);
	const [id, setId] = useState('');

	const updateData = () => {
		axios.put(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData/${id}`, {
			firstName,
			email,
			subscribe
		})
	}

	useEffect(() => {
		setId(localStorage.getItem('Id'));
		setFirstName(localStorage.getItem('First Name'));
		setEmail(localStorage.getItem('Email'));
	}, [])

	return (
		<Form>
			<Form.Field>
				<label>First Name</label>
				<input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
			</Form.Field>
			<Form.Field>
				<label>Email</label>
				<input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
			</Form.Field>
			<Form.Field>
				<Checkbox label='subscribe to our newsletter' checked={subscribe} onChange={() => setSubscribe(!subscribe)}/>
			</Form.Field>
			<Button type='submit' onClick={updateData}>Submit</Button>
		</Form>
	)
}
