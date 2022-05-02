import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        Menu: <Link to="/">Home</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="images">Images</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="api-integration">Api Integration</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="props">Props</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="children">Children</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="images/icon">icon</Link> 
    </div>

  )
}

export default Menu