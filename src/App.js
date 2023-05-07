import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import TaskCard from "./components/Card/TaskCard";

import { AuthProvider } from "./state/context/authContext";

const App = () => {
	return (
		<>
			<Router>
				<AuthProvider>
					<Switch>
						<Route path="/register" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/" component={TaskCard} />
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
};

export default App;
