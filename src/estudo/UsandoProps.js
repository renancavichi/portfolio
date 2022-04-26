import CardUser from "./CardUser.js";
import './UsandoProps.css'

const UsandoProps = () => {

    const users = [{
        id: 123,
        name: "Renan",
        lastname: "Cavichi",
        avatar: "https://aventurebox.ninja/thumbor/OFkI33QBHx9IQ10bx5kDLx5LLao=/76x0/center/middle/filters:no_upscale():no_upscale()/storage.googleapis.com/aventurebox-prod/uf/5431a3308f85f/profile/5f9b1c1cd50a4-4.jpg",
        status: "Transformando café..."
    },{
        id: 124,
        name: "Pedro",
        lastname: "da Silva",
        avatar: "https://aventurebox.ninja/thumbor/VZUf06gWHJrgxKMi9DKfx2Z51Sc=/76x0/center/middle/filters:no_upscale():no_upscale()/storage.googleapis.com/aventurebox-prod/uf/544c0a64dc883/profile/544c0aa07df92-4.jpg",
        status: "Ocupado!!!"
    }]

    return(
        <div className="listausers">
            {users && 
                users.map(
                    (user) => {
                        return <CardUser key={user.id} {...user} />
                    }
                )
            }
        </div>
        
    )
}

export default UsandoProps;