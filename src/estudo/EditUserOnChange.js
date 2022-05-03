import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUserOnChange = () => {

    const { userId } = useParams()
    const [user, setUser] = useState()
    const navigate = useNavigate()

    // const clearUserValue = {
    //     name: '',
    //     email: '',
    //     pass: ''
    // }

    useEffect(() => {
        fetch(`http://localhost/lp2/api/user/select-by-id/?id=${userId}`)
            .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => setUser(data))
            .catch((error) => {
                console.log(error);
            })
    }, [userId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', userId)
        formData.append('name', event.target[0].value)
        formData.append('email', event.target[1].value)
        formData.append('pass', event.target[2].value)
        fetch(
            "http://localhost/lp2/api/user/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.user?.id){
                    navigate('../');
                    //setUser(clearUserValue)
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    } 
  
    return (
        <>
        {user ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" value={user.name} onChange={handleChange} />
                <label>Email:</label><input type="email" name="email"  value={user.email} onChange={handleChange} />
                <label>Senha:</label><input type="password" name="pass"  value={user.pass} onChange={handleChange} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditUserOnChange