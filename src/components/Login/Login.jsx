import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { useFirebaseAuth } from "../../state/context/authContext";

function Login() {
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// TODO: Destructure the login function
	// from firebase authentication context
	const { login } = useFirebaseAuth();

	const navigate = useHistory();

	// TODO: Rename the username field
	// to emailFieldRef variable
	const emailFieldRef = useRef();
	const passwordFieldRef = useRef();

	async function sendLoginForm(e) {
		e.preventDefault();

		// TODO: Using a try catch block,
		// add the following statements:
		//
		// 1. Set loading status to true
		try {
			setLoadingStatus(true);
			// 2. Import the login function, and pass
			// the user login credentials
			await login(emailFieldRef.current.value, passwordFieldRef.current.value);

			// 3. Navigate to the home page
			navigate.push("/");
		} catch (error) {
			// 4. Print an error message to user
			setErrorMessage("Unable to sign you in. Check your credentials and try again!");
		}
		setLoadingStatus(false);
	}

	return (
		<section id="login">
			<div className="container">
				<div className="center-content">
					<div className="login-form">
						<form onSubmit={sendLoginForm}>
							<h2>Daily Tasks App</h2>
							<div className="form-fields">
								<input
									type="email"
									placeholder="Email or Username"
									ref={emailFieldRef}
									required
								/>
								<input
									type="password"
									placeholder="Password"
									ref={passwordFieldRef}
									required
								/>
							</div>
							<div className="form-btn">
								<button disabled={loadingStatus} type="submit">
									Log In
								</button>
							</div>
							<p class="redirect">
								Don't have an account? <Link to="/register">Sign up</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
