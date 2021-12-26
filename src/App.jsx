import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { CreateForm } from './components/CreateForm';
import { ReadForm } from './components/ReadForm';
import { UpdateForm } from './components/UpdateForm';
import { Home } from './components/Home';

const Container = styled.div`
	text-align: center;
`

export function App() {
  return (
		<Container>
			<Link to="/create">Create new credential</Link>
			<Link to="/read">Search credentials</Link>
			<Link to="/update">Edit credential</Link>
			<Link to="/">Home</Link>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<CreateForm />} />
				<Route path="/read" element={<ReadForm />} />
				<Route path="/update" element={<UpdateForm />} />
			</Routes>
    	</Container>
  );
}
