import React from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function CreateForm() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [terms, setTerms] = useState(false);
	const [subscribe, setSubscribe] = useState(true);
	const [errorMessage, setErrorMessage] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);

	const clearFill = () => {
		setFirstName('');
		setEmail('');
		setTerms(false);


	}

	const postData = () => {
		if (firstName && terms === true && email) {
			axios.post(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData`, {
				firstName,
				email,
				subscribe
			}).then(() => {
				clearFill();
				setErrorMessage(false);
				setSuccessMessage(true);
				setTimeout(() => {setSuccessMessage(false)}, 3000);
			}).catch(() => {
				console.log("First name and Terms");
			})
		}
		else {
			setErrorMessage(!errorMessage);
		}
	}


	return (
	<div>
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
		<Form.Field>
			<Checkbox label='I agree to the Terms and Conditions' checked={terms} onChange={() => setTerms(!terms)}/>
		</Form.Field>
		<Button type='submit' onClick={postData}>Submit</Button>
	</Form>
	{successMessage &&
		<Message positive>
			<Message.Header>Success</Message.Header>
			<p>Succesfully created user. You could see the register <Link to="/read">here</Link></p>
		</Message>
	}
	{errorMessage &&
		<Message
		error
		header="Sorry. We couldn't submit your registration"
		list={[
		'You need to enter your name',
		'You need to enter your email',
		'You need to check the Terms and Conditions checkbox',
		]}
		/>
	}
	</div>
	)
}
