import { useState, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

	const [isLogged, setIsLogged] = useState(false);
	const [userLogged, setUserLogged] = useState({});
	const [userLoaded, setUserLoaded] = useState(false);

	useEffect(() => {
		const userdata = localStorage.getItem('userLogged')
		let user = JSON.parse(userdata)
		if(user){
			setUserLogged(user)
			setIsLogged(true)
		}
		setUserLoaded(true)
	},[])
	
	return (
		<AuthContext.Provider value={[
			isLogged,
			setIsLogged,
			userLogged,
            setUserLogged,
			userLoaded
		]}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
   const [isLogged, setIsLogged, userLogged, setUserLogged, userLoaded] = useContext(AuthContext)
   return {isLogged, setIsLogged, userLogged, setUserLogged, userLoaded}
}

export const useAllowedRole = (role, redirectRoute) => {
	const { isLogged, userLogged, userLoaded} = useAuth()
	const navigate = useNavigate(); 
  
	useEffect(() => {
	  if(userLoaded){
		if(isLogged && userLogged?.token){
		  if(userLogged?.roles){
			if(!userLogged.roles.includes(role)){
			  navigate(redirectRoute)
			}
		  } else {
			navigate(redirectRoute)
		  }
		} else{
		  navigate(redirectRoute)
		}
	  }
	}, [isLogged, userLoaded])
}

export default AuthProvider