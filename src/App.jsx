import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateForm } from './components/CreateForm/CreateForm';
import { ReadForm } from './components/ReadForm/ReadForm';
import { UpdateForm } from './components/UpdateForm/UpdateForm';
import { Home } from './components/Home/Home';
import "./app.css";

export function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/create" element={<CreateForm />} />
			<Route path="/read" element={<ReadForm />} />
			<Route path="/update" element={<UpdateForm />} />
		</Routes>
  );
}
