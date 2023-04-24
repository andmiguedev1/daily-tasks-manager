import React from "react";

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
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
