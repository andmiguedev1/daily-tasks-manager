import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFirebaseAuth } from "../../state/context/authContext";

import "./Signup.css";

function Signup() {
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const { register } = useFirebaseAuth();
	const navigate = useHistory();

	const nameFieldRef = useRef();
	const usernameFieldRef = useRef();
	const emailFieldRef = useRef();
	const passwordFieldRef = useRef();
	const confirmPasswordRef = useRef();

	async function sendRegisterForm(e) {
		e.preventDefault();

		if (passwordFieldRef.current.value !== confirmPasswordRef.current.value) {
			return setErrorMessage("Your Password does not match Confirm Password");
		}
		try {
			setLoadingStatus(true);

			const signupUser = await register(
				emailFieldRef.current.value,
				passwordFieldRef.current.value
			);

			const name = nameFieldRef.current.value;
			const username = usernameFieldRef.current.value;

			console.log({
				name: name,
				username: username,
			});

			navigate.push("/login");
			return signupUser;
		} catch (error) {
			setErrorMessage(
				"Failed to create a new account. Make sure your password is valid!"
			);
		}
		setLoadingStatus(false);
	}

	return (
		<section id="sign-up">
			<div className="container">
				<div className="left-content">
					<div className="register-form">
						<form onSubmit={sendRegisterForm}>
							<h2>Register an account</h2>
							<div className="form-fields">
								<input type="text" placeholder="Name" ref={nameFieldRef} />
								<input
									type="text"
									placeholder="Username"
									required
									ref={usernameFieldRef}
								/>
								<input
									type="email"
									placeholder="Email"
									required
									ref={emailFieldRef}
								/>
								<input
									type="password"
									placeholder="Password"
									required
									ref={passwordFieldRef}
								/>
								<input
									type="password"
									placeholder="Confirm Password"
									required
									ref={confirmPasswordRef}
								/>
							</div>
							<div className="signup-btn">
								<button disabled={loadingStatus} type="submit">
									Sign Up
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="right-content">
					<div className="heading-message">
						<h2>Your tasks</h2>
						<p>
							Organize your daily activities by adding, changing, and removing your
							daily tasks, and kep important tasks on the top.
						</p>
						<p class="redirect">
							Already have an account ?<Link to="/login">Sign in</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Signup;
