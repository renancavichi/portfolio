import { useRef, useEffect} from 'react'

const FormUser = ({users, setUsers}) => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    nameRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', event.target[0].value);
    formData.append('email', event.target[1].value);
    formData.append('pass', event.target[2].value);
    fetch(
      "http://localhost/lp2/api/user/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
        nameRef.current.value = ''
        emailRef.current.value = ''
        passRef.current.value = ''
        nameRef.current.focus()
        //alert(data.message)
        setUsers([data.user, ...users])
      });
  } 

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
      <label>Email:</label><input ref={emailRef} type="email" name="email"/>
      <label>Senha:</label><input ref={passRef} type="password" name="pass"/>
      <input type="submit" value="Cadastrar" />
    </form>
  )
}

export default FormUser