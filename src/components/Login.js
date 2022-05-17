import { useRef } from "react";


const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();

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
                    emailRef.current.value = ''
                    passRef.current.value = ''
                    emailRef.current.focus()
                    console.log(data)
                } else {
                    let data = await response.json()
                    data?.message
                        ? alert(data?.message)
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
        </>
    )
}

export default Login