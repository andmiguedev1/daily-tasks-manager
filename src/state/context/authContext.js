import { useContext, useState } from "react";

// TODO: Add a variable that stores AuthContext
const AuthContext = React.createContext();

// TODO: Create a custom hook function that returns
// the created context for firebase authentication
export function useFirebaseAuth() {
	return useContext(AuthContext);
}

// TODO: Create a function that exports AuthProvider
// and pass the React children prop as a parameter
export function AuthProvider({ children }) {
	// TODO: Destructure the variables "onlineUser"
	// and "loadingState" with its setter function
	const [onlineUser, setOnlineUser] = useState([]);
	const [loadingState, setLoadingState] = useState(true);

	// TODO: Return a special component that calls
	// the Provider inside the AuthContext, then
	// pass onlineUser as an argument inside value
	return (
		<AuthContext.Provider value={onlineUser}>
			{!loadingState && children}
		</AuthContext.Provider>
	);
}
