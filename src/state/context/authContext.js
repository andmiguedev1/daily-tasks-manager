import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../private/firebaseConfig";

const AuthContext = React.createContext();

export function useFirebaseAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [onlineUser, setOnlineUser] = useState();
	const [loadingState, setLoadingState] = useState(true);

	async function register(userEmail, userPassword) {
		try {
			if (userEmail && userPassword) {
				await auth.createUserWithEmailAndPassword(userEmail, userPassword);
			}
		} catch (error) {
			console.log(
				"Sorry! We were unable to sign you in. Check error message:",
				error.message
			);
		}
	}

	async function login(userEmail, userPassword) {
		try {
			if (userEmail && userPassword) {
				await auth.signInWithEmailAndPassword(userEmail, userPassword);
			}
		} catch (error) {
			console.log("Your credentials do not match our records. Try again!");
		}
	}

	const authInfo = {
		onlineUser,
		register,
		login,
	};

	// IMPORTANT
	//
	// You must unsusbcribe the state of the authentication,
	// before accessing the values in context, in order to
	// prevent side effects or an unresponsive rendering.
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authUser => {
			setOnlineUser(authUser);
			setLoadingState(false);
		});

		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider value={authInfo}>
			{!loadingState && children}
		</AuthContext.Provider>
	);
}
