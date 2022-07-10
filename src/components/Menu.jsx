import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <h1>MENU</h1>
      <Link to="/informes">
          <Button variant="success">Mis Informes</Button>{' '}
          </Link>
        
          <Link to="/newinforme">
          <Button variant="success">Crear</Button>{' '}
          </Link>
         
          <Link to="/login">
          <Button variant="success">Salir</Button>{' '}
          </Link>
    </div>
  )
}

export default Menu
