import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { useAuth } from '../providers/authProvider'

const Menu = () => {

  const {isLogged, userLogged} = useAuth();

  return (
    <div className='menu'>
        Menu: <NavLink to="/">Home</NavLink> 
        <NavLink end style={{margin: '0 0 0 10px'}} to="images">Images</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="props">Props</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="children">Children</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="images/icon">Icon</NavLink>  
        { isLogged 
          ? (<span>Logado como: {userLogged.email}</span>)
          : (<span><Link to="admin/login">Login Admin</Link></span>)
        }
    </div>

  )
}

export default Menu