import React from 'react'
import { useFormik } from 'formik';

const Register = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    const onSubmit = () => {
        alert("Formulario validado!");
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    });

    const { handleSubmit, handleChange, values, errors} = formik;

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
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
            <div>
                <label>Rol</label>
                <select 
                    value={values.role} 
                    name="rol" 
                    onChange={handleChange} 
                >
                    <option value="Team Member">Team Member</option>
                    <option value="Team Leader">Team Leader</option>
                </select>
                {errors.role && <p>{errors.role}</p>}
            </div>
            <div>
                <label>Continente</label>
                <select 
                    value={values.continent} 
                    name="continent" 
                    onChange={handleChange} 
                >
                    <option value="America">America</option>
                    <option value="Europa">Europa</option>
                    <option value="Otro">Otro</option>
                </select>
                {errors.continent && <p>{errors.role}</p>}
            </div>
            <div>
                <label>Región</label>
                <select 
                    value={values.region} 
                    name="region" 
                    onChange={handleChange}
                >
                    <option value="Latam">Latam</option>
                    <option value="Brasil">Brasil</option>
                    <option value="America del Norte">America del Norte</option>
                    <option value="Otro">Otro</option> 
                </select>
                {errors.continent && <p>{errors.role}</p>}
            </div>
            <input type="hidden" name="teamID" value="9cdvd108-f924-4383-947d-8f0c651d0dad" /> 
            <input type="submit"/>
            </form>
        </div>
    )
}

export default Register