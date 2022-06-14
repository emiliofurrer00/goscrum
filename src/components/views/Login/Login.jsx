import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import './Login.styles.css'

async function handleLogin(userName, password){
    try {
        const response = await fetch('https://goscrum-api.alkemy.org/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'  
            },
            body: JSON.stringify({
                    userName,
                    password,
            })
        })
        const json = await response.json();
        return json
    } catch(e){
        console.error(e)
    }
}

const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: "",
    };

    const validate = values => {
        const errors = {};
        if(!values.username){
            errors.username = "El nombre de usuario es requerido.";
        }
        if (!values.password){
            errors.password = "El password es requerido.";
        }
        return errors;
    }

    const [loginError, setLoginError] = useState("");

    const onSubmit = async (values, actions) => {
        const {username, password} = values;
        //console.log(values);
        const response = await handleLogin(username, password);
        //console.log(response)
        if (response.status_code === 200) {
            localStorage.setItem("username", response.userName);
            localStorage.setItem("logged", "yes");
            localStorage.setItem("token", response.result.token);
            navigate('/', {replace: true});
        } else if (response.status_code === 404) {
            setLoginError("No existe cuenta asociada con ese nombre de usuario.")
        } else if (response.status_code === 401) {
            setLoginError("Contraseña incorrecta.")
        }
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    });

    const { handleSubmit, handleChange, values, errors} = formik;

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
            <h2 className="title">Iniciar sesión</h2>
            <div>
                <label>Nombre de usuario</label>
                <input 
                    value={values.username} 
                    name="username" 
                    type="text" 
                    onChange={handleChange} 
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Contraseña</label>
                <input 
                    value={values.password} 
                    name="password" 
                    type="password" 
                    onChange={handleChange} 
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <input type="submit"/>
            {loginError && <p style={{color: 'red'}}>{loginError}</p>}            
            <Link className="link" to="/register">Registrarme</Link>
            </form>
        </div>
    )
}

export default Login