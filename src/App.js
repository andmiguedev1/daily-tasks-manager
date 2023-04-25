import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
	return (
		<div className="App">
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
