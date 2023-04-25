import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
	return (
		<section id="login">
			<div className="container">
				<div className="center-content">
					<div className="login-form">
						<form>
							<h2>Daily Tasks App</h2>
							<div className="form-fields">
								<input type="text" placeholder="Email or Username" required />
								<input type="password" placeholder="Password" required />
							</div>
							<div className="form-btn">
								<button type="submit">Log In</button>
							</div>
							{/* TODO
							 * Add a paragraph tag with a link to register page */}
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
