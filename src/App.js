import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
	return (
		<div className="App">
			{/* TODO:
			 * Using react-router-dom v5 documentation,
			 * Set the routes for the register and login page */}
			<Router>
				<Switch>
					<Route exact path="/register" component={Signup} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
