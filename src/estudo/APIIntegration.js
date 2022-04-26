import { useEffect, useState } from "react";
import FormUser from "./FormUser";
import {BsTrash as IconTrash} from "react-icons/bs"

const APIIntegration = () => {
const [users, setUsers] = useState(null);

useEffect(() => {
    fetch("http://localhost/lp2/api/user/select-all")
        .then((response) => response.json())
        .then((data) => setUsers(data));
}, []);

const handleTrashClick = (userId) => {
  const formData = new FormData();
  formData.append('id', userId);
  const urlDelete = "http://localhost/lp2/api/user/delete";
  fetch(urlDelete, {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message)
      const usersFiltered = users.filter((user) => { return user.id !== userId });
      setUsers(usersFiltered)
    });
}

return (
    <>
    <FormUser setUsers={setUsers} users={users}/>
    {users &&
      users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <IconTrash onClick={() => handleTrashClick(user.id)}/>
          </div>
        )
      })
    }
    </>
  )
}

export default APIIntegration