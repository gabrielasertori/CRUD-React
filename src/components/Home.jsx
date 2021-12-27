import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillDatabase, AiFillHeart } from 'react-icons/ai';

export function Home() {
	return (
		<Bg>
			<Container>
					<Title>User Register</Title>
				<Display>
					<Link to="/create">
					<Card>
						<div><AiFillPlusCircle style={{ fontSize: '32px', color: '#08c' }}/></div>
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
				<div className="ui horizontal divider">
					Made with <AiFillHeart /> ReactJS
				</div>
				<Info>
					<p><strong>Also made with:</strong></p>
					<p><strong>Axios:</strong> Axios is a simple promise based HTTP client for the browser and node.js.</p>
					<p><strong>Styled-Components:</strong> Styled Components is a library for React and React Native to write and manage your CSS, based on “CSS-in-JS”.</p>
					<p><strong>Semantic-UI:</strong> Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.</p>
					<p><strong>React Icon:</strong> React Icon gather icon libraries to facilitate development of your UI.</p>
					<p><strong>React Router Dom:</strong> React Router DOM is an npm package that enables you to implement dynamic routing in a web app.</p>
				</Info>
			</Container>
		</Bg>
	)
}

const Bg = styled.div`
	background-image: url(${require(`../images/bgcolorful.jpeg`)});
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

const Info = styled.div`
	padding: 10px 50px 50px 50px;
	text-align: left;
`

const Title = styled.h1`
	color: #08c;
	font-family: 'Merriweather', serif;
	font-size: 52px;
	padding: 50px 0;
`