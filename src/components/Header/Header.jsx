import React from 'react'
import { StyledHeader } from './Header.styles'
import { useNavigate } from 'react-router-dom';
import { DonateBtn } from './Header.styles';

function Header({tasksNumber = 0}) {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('logged');
        navigate('/login', {replace: true});
    }

    return (
        <StyledHeader>
            <h1 className="header-logo">
                <span>
                    Go
                </span>
                Scrum
            </h1>
            <div className="right-section">
                <DonateBtn>Donar</DonateBtn>
                <h4>Tareas creadas: {tasksNumber}</h4>
                <h4>{localStorage.getItem("username") ?? "Usuario"}</h4>
                <button onClick={handleLogout} className='logout-btn'>X</button>
            </div>
        </StyledHeader>
    )
}

export default Header