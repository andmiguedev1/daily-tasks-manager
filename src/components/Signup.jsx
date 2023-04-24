import React from "react";

import "./Signup.css";

function Signup() {
   return (
		<section id="sign-up">
			<div className="container">
				<div className="left-content">
					<div className="register-form">
						{/* TODO: Add the html markup for a register form */}
						<form>
							<h2>Register an account</h2>
							<div className="form-fields">
								<input type="text" placeholder="Name" />
								<input type="text" placeholder="Username" required />
								<input type="email" placeholder="Email" required />
								<input type="password" placeholder="Password" required />
								<input type="password" placeholder="Confirm Password" required />
							</div>
							<div className="signup-btn">
								<button type="submit">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
				<div className="right-content">
					<div className="heading-message">
						{/* TODO: Add the html markup for a heading message */}
						<h2>Your tasks</h2>
						<p>
							Organize your daily activities by adding, changing, and removing your
							daily tasks, and kep important tasks on the top.
						</p>
						<p class="redirect">Already have an account ?</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Signup;
