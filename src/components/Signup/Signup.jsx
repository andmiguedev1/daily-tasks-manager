import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

function Signup() {
	const nameFieldRef = useRef();
	const usernameFieldRef = useRef();
	const emailFieldRef = useRef();
	const passwordFieldRef = useRef();
	const confirmPasswordRef = useRef();

	function handleRegisterForm(e) {
		e.preventDefault();

		const name = nameFieldRef.current.value;
		const username = usernameFieldRef.current.value;
		const email = emailFieldRef.current.value;
		const password = passwordFieldRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		console.log({
			name: name,
			username: username,
			email: email,
			password: password,
			confirm: confirmPassword,
		});
	}

	return (
		<section id="sign-up">
			<div className="container">
				<div className="left-content">
					<div className="register-form">
						<form onSubmit={handleRegisterForm}>
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
								<button type="submit">Sign Up</button>
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
						{/* TODO:
						 * Use link component to redirect to login page */}
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
