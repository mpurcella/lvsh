import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/pages/HomePage/Home';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path='/' component={Home}/>
			</Switch>
		</>
	);
}

export default App;
