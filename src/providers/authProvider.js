import { useState, createContext } from 'react';
import { useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
	const [isLogged, setIsLogged] = useState(false);
	const [userLogged, setUserLogged] = useState({
        email: 'renancavichi@gmail.com',
        roles: 'admin',
        token: '233j12398u132n12389u123j1'
    });
	
	return (
		<AuthContext.Provider value={[
			isLogged,
			setIsLogged,
			userLogged,
            setUserLogged
		]}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
   const [ isLogged, setIsLogged, userLogged, setUserLogged] = useContext(AuthContext)
   return {isLogged, setIsLogged, userLogged, setUserLogged}
}

export default AuthProvider