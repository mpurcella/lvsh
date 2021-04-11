import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../components/pages/Home/Home';
import Pricing from '../components/pages/Products/Products';
import Services from '../components/pages/Services/Services';
import Rewards from '../components/pages/Rewards/Rewards';
import SignUp from '../components/pages/SignUp/SignUp';

let App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/products' component={Pricing} />
				<Route path='/services' component={Services} />
				<Route path='/sign-up' component={SignUp} />
				<Switch>
					<Route path='/rewards' component={Rewards}/>
				</Switch>
			</Switch>
			<Footer />
		</>
	);
}

export default App;