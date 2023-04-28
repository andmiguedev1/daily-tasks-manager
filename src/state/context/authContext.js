import { useContext, useState } from "react";
import { auth } from "../../private/firebaseConfig";

const AuthContext = React.createContext();

export function useFirebaseAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [onlineUser, setOnlineUser] = useState([]);
	const [loadingState, setLoadingState] = useState(true);

	// TODO: Create an async function that register an
	// online user's email and password in firebase auth
	//
	// Note: Make sure to import auth from firebase config
	// and then call the built-in firebase method
	async function register(userEmail, userPassword) {
		try {
			if (userEmail && userPassword) {
				await auth.createUserWithEmailAndPassword(userEmail, userPassword);
			}
		} catch (err) {
			console.log(
				"Sorry! We were unable to sign you in. Check error message:",
				error.message
			);
		}
	}

	// TODO: Create a function that login a registered
	// online user
	async function login(userEmail, userPassword) {
		try {
			if (userEmail && userPassword) {
				await auth.signInWithEmailAndPassword(userEmail, userPassword);
			}
		} catch (err) {
			console.log("Your credentials do not match our records. Try again!");
		}
	}

	// TODO: Add an object that holds the auth functions
	// and user info so, that it can passed more than one
	// value as an argument
	const authInfo = {
		onlineUser,
		register,
		login,
	};

	return (
		<AuthContext.Provider value={authInfo}>
			{!loadingState && children}
		</AuthContext.Provider>
	);
}
