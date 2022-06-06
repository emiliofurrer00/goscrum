import React from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import './Login.styles.css'

const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };

    const validate = values => {
        const errors = {};
        if(!values.email){
            errors.email = "El email es requerido.";
        }
        if (!values.password){
            errors.password = "El password es requerido.";
        }
        return errors;
    }

    const onSubmit = () => {
        localStorage.setItem("logged", "yes");
        navigate("/", {replace: true});
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
                <label>Email</label>
                <input 
                    value={values.email} 
                    name="email" 
                    type="email" 
                    onChange={handleChange} 
                />
                {errors.email && <p>{errors.email}</p>}
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
            <Link className="link" to="/register">Registrarme</Link>
            </form>
        </div>
    )
}

export default Login