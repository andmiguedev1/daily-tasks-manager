import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { useFirebaseAuth } from "../../state/context/authContext";

function Login() {
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const { login } = useFirebaseAuth();
	const navigate = useHistory();

	const emailFieldRef = useRef();
	const passwordFieldRef = useRef();

	async function sendLoginForm(e) {
		e.preventDefault();

		try {
			setLoadingStatus(true);
			await login(emailFieldRef.current.value, passwordFieldRef.current.value);

			if (emailFieldRef && passwordFieldRef) {
				navigate.push("/");
			}
		} catch {
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
								{errorMessage && <p className="display-error">{errorMessage}</p>}
								<input
									type="email"
									placeholder="Email or Username"
									ref={emailFieldRef}
								/>
								<input
									type="password"
									placeholder="Password"
									ref={passwordFieldRef}
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
