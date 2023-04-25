import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
	const usernameFieldRef = useRef();
	const passwordFieldRef = useRef();

	function handleLoginForm(e) {
		e.preventDefault();

		const username = usernameFieldRef.current.value;
		console.log({ username: username });
	}

	return (
		<section id="login">
			<div className="container">
				<div className="center-content">
					<div className="login-form">
						<form onSubmit={handleLoginForm}>
							<h2>Daily Tasks App</h2>
							<div className="form-fields">
								<input
									type="text"
									placeholder="Email or Username"
									required
									ref={usernameFieldRef}
								/>
								<input
									type="password"
									placeholder="Password"
									required
									ref={passwordFieldRef}
								/>
							</div>
							<div className="form-btn">
								<button type="submit">Log In</button>
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
