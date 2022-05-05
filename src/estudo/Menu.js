import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        Menu: <NavLink to="/">Home</NavLink> 
        <NavLink end style={{margin: '0 0 0 10px'}} to="images">Images</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="props">Props</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="children">Children</NavLink> 
        <NavLink style={{margin: '0 0 0 10px'}} to="images/icon">Icon</NavLink>
        <NavLink style={{margin: '0 0 0 10px'}} to="admin">Admin</NavLink>  
    </div>

  )
}

export default Menu