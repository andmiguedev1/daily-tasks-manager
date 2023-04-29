import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFirebaseAuth } from "../../state/context/authContext";

import "./Signup.css";

function Signup() {
	// TODO: Add a temporary variable for holding
	// the error state, and loading status
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// TODO: Extract the register function from
	// firebase authentication context
	const { register } = useFirebaseAuth();

	// TODO: Make an instance of useHistory hook,
	// so that you can navigate to other pages
	const navigate = useHistory();

	const nameFieldRef = useRef();
	const usernameFieldRef = useRef();
	const emailFieldRef = useRef();
	const passwordFieldRef = useRef();
	const confirmPasswordRef = useRef();

	async function sendRegisterForm(e) {
		e.preventDefault();

		// TODO: Add a statement that validates if
		// the password enter by the online user does
		// not match the password confirmation field
		if (passwordFieldRef.current.value !== confirmPasswordRef.current.value) {
			return setErrorMessage("Your Password does not match Confirm Password");
		}
		try {
			// TODO: Add the following instructions
			//
			// 1. Switch the value of loading status
			setLoadingStatus(true);
			// 2. Call the register function from the authContext file
			// and pass the email and password form field values
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

			// 3. Redirect online user to Login page
			navigate.push("/login");
			return signupUser;
		} catch (error) {
			// TODO: Write an error message
			setErrorMessage("Something went wrong! Failed to create an account");
		}

		// TODO: Set loading status to false, once registration is finished
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
								{/* TODO: Add disabled attribute, so that the button is
								 * enabled only after all the fields have been filled */}
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
