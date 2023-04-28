import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import UserProvider from "./state/context/userContext";

function App() {
	return (
		<div className="App">
			<UserProvider>
				<Router>
					<Switch>
						<Route exact path="/register" component={Signup} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</Router>
			</UserProvider>
		</div>
	);
}

export default App;
