import { useRef, useEffect } from "react";
import { useAuth } from "../providers/authProvider";

const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();

    const { setIsLogged, setUserLogged, isLogged, userLogged } = useAuth();

    useEffect(() => {
        emailRef.current.focus()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('email', event.target[0].value);
        formData.append('pass', event.target[1].value);
        fetch(
          "http://localhost/lp2/api/auth/login",
          {method: 'POST', body: formData}
        )
          .then(async (response) => {
                if(response.status === 200){
                    let data = await response.json()
                    setIsLogged(true)
                    setUserLogged(data.session)
                    localStorage.setItem('userLogged', JSON.stringify(data.session));
                } else {
                    let data = await response.json()
                    data?.message
                        ? alert(data.message)
                        : alert('Erro ao Logar!')
                }
            })
    } 

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
            <label>Email:</label><input ref={emailRef} type="email" name="email"/>
            <label>Senha:</label><input ref={passRef} type="password" name="pass"/>
            <input type="submit" value="Logar" />
            </form>
            <h1>User Logged</h1>
            { isLogged
                ? (<span>isLogged True</span>)
                : (<span>isLogged False</span>)
            }
            <br />
            <p>
                {JSON.stringify(userLogged)}
            </p>
            
        </>
    )
}

export default Login