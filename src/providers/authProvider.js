import { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

	const [isLogged, setIsLogged] = useState(false);
	const [userLogged, setUserLogged] = useState({});

	useEffect(() => {
		const userdata = localStorage.getItem('userLogged')
		let user = JSON.parse(userdata)
		if(user){
			setUserLogged(user)
			setIsLogged(true)
		}
	},[])
	
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
   const [isLogged, setIsLogged, userLogged, setUserLogged] = useContext(AuthContext)
   return {isLogged, setIsLogged, userLogged, setUserLogged}
}

export default AuthProvider