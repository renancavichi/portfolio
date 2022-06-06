import { useRef, useEffect} from 'react'
import { useAuth } from '../providers/AuthProvider';

const CadastraProduto = ({users, setUsers}) => {

  const titleRef = useRef();
  const photoRef = useRef();
  const priceRef = useRef();
  const { userLogged } = useAuth();

  useEffect(() => {
    titleRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('title', event.target[0].value);
    formData.append('photo', event.target[1].value);
    formData.append('price', event.target[2].value);
    
    fetch("http://localhost/lp2/api/product/create", {
        method: 'POST',
        body: formData,
        headers: {
          "Access-Token": userLogged.token
        }
      })
      .then((response) => response.json())
      .then((data) => {
        titleRef.current.value = ''
        photoRef.current.value = ''
        priceRef.current.value = ''
        titleRef.current.focus()
        console.log(data)
        alert(data.message)
      });
  } 

  return (
    <>
    <h1>Cadastra Produto</h1>
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Title:</label><input ref={titleRef} type="text" name="title"/>
      <label>Photo:</label><input ref={photoRef} type="text" name="photo"/>
      <label>Price:</label><input ref={priceRef} type="text" name="price"/>
      <input type="submit" value="Cadastrar" />
    </form>
    </>

  )
}

export default CadastraProduto