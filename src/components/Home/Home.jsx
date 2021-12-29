import React from "react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillDatabase, AiFillHeart } from 'react-icons/ai';
import { Bg, Container, Title, Display, Card, Info } from "./Styles";

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
