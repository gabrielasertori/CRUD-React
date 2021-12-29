import React, { useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { useState } from 'react';
import { AiFillPlusCircle, AiFillHome, AiFillDatabase } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Bg, Container, Display, Card, Title, Label } from './Styles';

export function UpdateForm() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [subscribe, setSubscribe] = useState(true);
	const [id, setId] = useState('');
	const [errorMessageEmail, setErrorMessageEmail] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);

	const updateData = () => {
		if (!email.includes("@")) {
			setErrorMessageEmail(true);
			setTimeout(() => {setErrorMessageEmail(false)}, 3000);
		}
		else {
			axios.put(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData/${id}`, {
				firstName,
				email,
				subscribe
			}).then(() => {
				setSuccessMessage(true);
				setTimeout(() => {setSuccessMessage(false)}, 3000);
			})
		}
	}

	useEffect(() => {
		setId(localStorage.getItem('Id'));
		setFirstName(localStorage.getItem('First Name'));
		setEmail(localStorage.getItem('Email'));
	}, [])

	return (
		<Bg>
			<Container>
				<Title>Update User</Title>
				<Form style={{ margin: '0 60px 60px 60px'}}>
					<Form.Field>
						<Label>First Name</Label>
						<input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
					</Form.Field>
					<Form.Field>
						<Label>Email</Label>
						{errorMessageEmail ?
						<Form.Input
						error={{ content: 'Please enter your email'}}
						fluid
						placeholder='Email'
						/>
						:
						<input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
						}
					</Form.Field>
					<Form.Field>
						<Checkbox label='subscribe to our newsletter' checked={subscribe} onChange={() => setSubscribe(!subscribe)}/>
					</Form.Field>
					<Button type='submit' style={{ fontSize: '18px', backgroundColor: '#bb59a2' }} onClick={updateData}>Submit</Button>
				</Form>
				{successMessage &&
					<Message positive>
						<Message.Header>Success</Message.Header>
						<p>Succesfully created user. You could see the register <Link to="/read">here</Link></p>
					</Message>
				}
				<Display>
						<Link to="/">
						<Card>
							<div><AiFillHome style={{ fontSize: '32px', color: '#08c' }}/></div>
							<span>Home</span>
						</Card>
						</Link>
						<Link to="/create">
							<Card>
								<div><AiFillPlusCircle style={{ fontSize: '24px', color: '#08c' }}/></div>
								<span>New credential</span>
							</Card>
						</Link>
						<Link to="/read">
							<Card>
								<div><AiFillDatabase style={{ fontSize: '32px', color: '#08c' }}/></div>
								<span>Registers</span>
							</Card>
						</Link>
					</Display>
			</Container>
		</Bg>
	)
}
