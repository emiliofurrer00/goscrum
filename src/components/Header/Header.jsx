import React from 'react'
import { StyledHeader } from './Header.styles'

function Header() {
  return (
    <StyledHeader>
        <h1 className="header-logo">
            <span>
                Go
            </span>
            Scrum
        </h1>
        <div className="right-section">
            <button className='donate-btn'>Donar</button>
            <h4>Tareas creadas: 2</h4>
            <h4>Usuario</h4>
            <button className='logout-btn'>X</button>
        </div>
    </StyledHeader>
  )
}

export default Header