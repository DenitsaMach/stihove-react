import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const initialAuthState = {
	id: '',
	accessToken: '',
	email: '',
	firstName: '',
	lastName: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage('user', initialAuthState);

	const login = ({id, accessToken, email, firstName, lastName}) => {
		setUser({id, accessToken, email, firstName, lastName});
	}

	const logout = () => {
		setUser(initialAuthState);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user.accessToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const authState = useContext(AuthContext);
	return authState;
}