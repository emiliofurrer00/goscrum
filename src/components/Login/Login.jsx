import React from 'react'
import { useFormik } from 'formik'

export const Login = () => {
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
        alert("Formulario validado!");
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
            <h2>Iniciar sesión</h2>
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
            </form>
        </div>
    )
}