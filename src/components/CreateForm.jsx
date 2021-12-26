import React from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export function CreateForm() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [terms, setTerms] = useState(false);
	const [subscribe, setSubscribe] = useState(true);

	const postData = () => {
		if (firstName && terms === true && email) {
			axios.post(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData`, {
				firstName,
				email,
				subscribe
			});
			setFirstName('');
			setEmail('');
			setTerms(false);
		}
		else {
			console.log("First name and Terms");
		}
	}

	return (
	<Form>
		<Form.Field>
			<label>First Name</label>
			<input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
		</Form.Field>
		<Form.Field>
			<label>Email</label>
			<input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
		</Form.Field>
		<Form.Field>
			<Checkbox label='subscribe to our newsletter' checked={subscribe} onChange={() => setSubscribe(!subscribe)}/>
		</Form.Field>
		<Form.Field>
			<Checkbox label='I agree to the Terms and Conditions' onChange={() => setTerms(!terms)}/>
		</Form.Field>
		<Button type='submit' onClick={postData}>Submit</Button>
	</Form>
	)
}
