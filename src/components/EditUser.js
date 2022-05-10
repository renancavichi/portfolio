import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {

    const { userId } = useParams();
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/lp2/api/user/select-by-id/?id="+userId)
            .then((response) => response.json())
            .then((data) => setUser(data));
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
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 
  
    return (
        <>
        {user ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Nome:</label><input type="text" name="name" defaultValue={user.name} />
                <label>Email:</label><input type="email" name="email"  defaultValue={user.email} />
                <label>Senha:</label><input type="password" name="pass"  defaultValue={user.pass} />
                <input type="submit" value="Editar" />
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditUser