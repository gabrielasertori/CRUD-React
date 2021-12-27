import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { AiFillDatabase, AiFillHome } from 'react-icons/ai';

export function CreateForm() {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [terms, setTerms] = useState(false);
	const [subscribe, setSubscribe] = useState(true);
	const [errorMessageName, setErrorMessageName] = useState(false);
	const [errorMessageEmail, setErrorMessageEmail] = useState(false);
	const [errorMessageBox, setErrorMessageBox] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);

	const clearFill = () => {
		setFirstName('');
		setEmail('');
		setTerms(false);
	}

	const postData = () => {
		if (!firstName || !email.includes("@") || terms === false){
			console.log("To no if");
			console.log(email);
			if (!firstName) {
				setErrorMessageName(true);
				setTimeout(() => {setErrorMessageName(false)}, 3000);
			}
			if (!email.includes("@")) {
				setErrorMessageEmail(true);
				setTimeout(() => {setErrorMessageEmail(false)}, 3000);
			}
			if (terms === false) {
				setErrorMessageBox(true);
				setTimeout(() => {setErrorMessageBox(false)}, 3000);
			}
		}
		else {
			axios.post(`https://61c48492f1af4a0017d9960f.mockapi.io/fakeData`, {
				firstName,
				email,
				subscribe
			}).then(() => {
				clearFill();
				setErrorMessageName(false);
				setErrorMessageEmail(false);
				setErrorMessageBox(false);
				setSuccessMessage(true);
				setTimeout(() => {setSuccessMessage(false)}, 3000);
			}).catch(() => {
				console.log("First name and Terms");
			})
		}
	}


	return (
		<Bg>
			<Container>
				<Title>Create New User</Title>
				<Form style={{ margin: '0 60px 60px 60px'}}>
					<Form.Field required>
						<Label>First Name</Label>
						{errorMessageName ?
						<Form.Input
						error={{ content: 'Please enter your first name' }}
						fluid
						placeholder='First name'
						id='form-input-first-name'
						/>
						:
						<input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

						}
					</Form.Field>
					<Form.Field required>
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
					<Form.Field required>
						{errorMessageBox ?
						<Form.Checkbox
						error={{ content: 'You must agree with the Terms and Conditions', pointing: 'left' }}
						/>
						:
						<Checkbox label='I agree to the Terms and Conditions' checked={terms} onChange={() => setTerms(!terms)}/>
						}
					</Form.Field>
					<Button type='submit' style={{ fontSize: '18px', backgroundColor: '#bb59a2' }} onClick={postData}>Submit</Button>
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

const Bg = styled.div`
	background-image: url(${require(`../images/bg_confettibg.jpg`)});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	text-align: center;
`

const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 500px;
`

const Title = styled.h2`
	color: #08c;
	font-family: 'Merriweather', serif;
	font-size: 32px;
	padding: 50px 0;
`
const Label = styled.label`
	text-align: left;
`

const Card = styled.div`
	background-color: #fdfdfd;
	border-radius: 15px;
	box-shadow: 0 0 10px 0 rgba(75, 75, 75, 0.2);
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0 30px 60px 30px;
	width: 160px;
	height: 170px;
`

const Display = styled.div`
	display: flex;
	justify-content: space-evenly;
`