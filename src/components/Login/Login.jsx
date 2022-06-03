import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if (!email || !password){
            alert("Es indispensable completar ambos inputs");
        } else {
            alert("Form validado");
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div>
                <label>Email</label>
                <input 
                    value={email} 
                    name="email" 
                    type="email" 
                    onChange={e => setEmail(e.target.value)} 
                />
            </div>
            <div>
                <label>Contraseña</label>
                <input 
                    value={password} 
                    name="password" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)} 
                />
            </div>
            <input type="submit" />
            </form>
        </div>
    )
}