import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import './Register.styles.css'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
//import { getAuthData } from '../../../api/requests';

const Register = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://goscrum-api.alkemy.org/auth/data')
            .then(response => response.json())
            .then(parsedResponse => setData(parsedResponse.result));
    }, [])

    const initialValues = {
        userName: "",
        email: "",
        password: "",
        role: "",
        //teamID: "",
        continent: "",
        region: "",
    };

    const required = "Campo obligatorio";

    const validationSchema = () => 
        Yup.object().shape({
            userName: Yup.string()
                .min(4, "La cantidad mínima de caracteres es 4")
                .required(required),
            password: Yup.string()
                .required(required),
            email: Yup.string()
                .required(required),
            //teamID: Yup.string().required(required),
            continent: Yup.string()
                .required(required),
            region: Yup.string()
                .required(required)
        })

    const onSubmit = () => {
        alert("Formulario validado!");
        console.log(values)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = formik;

    return (
        <div className="App">                
            <button onClick={() => console.log(data)}>Log Data</button>
            <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <div>
                <label>Nombre de usuario</label>
                <input 
                    value={values.userName} 
                    name="userName" 
                    type="text" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                />
                {touched.userName && errors.userName && <p>{errors.userName}</p>}
            </div>
            <div>
                <label>Contraseña</label>
                <input 
                    value={values.password} 
                    name="password" 
                    type="password" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                />
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Email</label>
                <input 
                    value={values.email} 
                    name="email" 
                    type="email" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="switch" className="toggle">
                <input type="checkbox" id="switch" className="checkbox" />
                    Perteneces a un equipo ya creado
                </label>                
            </div>
            <div>
                <label>Rol</label>
                <select className="select-role"
                    value={values.role} 
                    name="role" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                >
                    <option value="">Seleccionar rol...</option>
                    {data?.Rol?.map(role => (
                        <option value={role} key={role}>{role}</option>
                    ))}
                    {/* <option value="Team Member">Team Member</option>
                    <option value="Team Leader">Team Leader</option> */}
                </select>
                {touched.role && errors.role && <p>{errors.role}</p>}
            </div>
            <div>
                <label>Continente</label>
                <select 
                    value={values.continent} 
                    name="continent" 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                >
                    <option value="">Seleccionar continente...</option>
                    {data?.continente?.map(continente => (
                        <option value={continente} key={continente}>{continente}</option>
                    ))}
                    {/* <option value="Europa">Europa</option>
                    <option value="Otro">Otro</option> */}
                </select>
                {touched.continent && errors.continent && <p>{errors.role}</p>}
            </div>
            {values.continent === "America" && (
                <div>
                    <label>Región</label>
                    <select 
                        value={values.region} 
                        name="region" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="">Seleccionar región...</option>
                        {data?.region?.map(region => (
                            <option value={region} key={region}>{region}</option>
                        ))}
                        {/* <option value="Brasil">Brasil</option>
                        <option value="America del Norte">America del Norte</option>
                        <option value="Otro">Otro</option>  */}
                    </select>
                    {touched.continent && errors.continent && <p>{errors.role}</p>}
                </div>                
            )}

            <input type="hidden" name="teamID" value="9cdvd108-f924-4383-947d-8f0c651d0dad" /> 
            <input type="submit"/>            
            <Link className="link" to="/login">Ir a Iniciar sesión</Link>
            </form>
        </div>
    )
}

export default Register