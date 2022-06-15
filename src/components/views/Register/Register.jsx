import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorText, Input, Select } from '../../TaskForm/TaskForm.styles';
//import { getAuthData } from '../../../api/requests';

const Register = () => {
    const [data, setData] = useState();
    const [isSwitched, setIsSwitched] = useState(false);

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
        teamID: "",
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
            teamID: Yup.string()
                .required(required),
            role: Yup.string()
                .required(required),
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
                <Input
                    value={values.userName} 
                    name="userName" 
                    type="text" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    error={touched.userName && errors.userName}
                />
                {touched.userName && errors.userName && <ErrorText>{errors.userName}</ErrorText>}
            </div>
            <div>
                <label>Contraseña</label>
                <Input 
                    value={values.password} 
                    name="password" 
                    type="password" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    error={touched.password && errors.password}
                />
                {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
            </div>
            <div>
                <label>Email</label>
                <Input 
                    value={values.email} 
                    name="email" 
                    type="email" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                />
                {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>
            <div >
                <label 
                    style={{
                        display: 'flex', 
                        alignItems: 'center'
                    }} 
                    htmlFor="switch" 
                    className="toggle">
                <input 
                    type="checkbox" 
                    id="switch" 
                    className="checkbox" 
                    onChange={(e) => setIsSwitched(e.target.checked)}
                />
                    Perteneces a un equipo ya creado
                </label>                
            </div>
            {isSwitched && (            
                <div>
                    <label>Por favor, introduce el identificador de equipo</label>
                    <Input
                        type="text"
                        name="teamID"
                        value={values.teamID}
                        onChange={handleChange}
                    />
                </div>                
            )}
            <div>
                <label>Rol</label>
                <Select className="select-role"
                    value={values.role} 
                    name="role" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    error={touched.role && errors.role}
                >
                    <option value="">Seleccionar rol...</option>
                    {data?.Rol?.map(role => (
                        <option value={role} key={role}>{role}</option>
                    ))}
                    {/* <option value="Team Member">Team Member</option>
                    <option value="Team Leader">Team Leader</option> */}
                </Select>
                {touched.role && errors.role && <ErrorText>{errors.role}</ErrorText>}
            </div>
            <div>
                <label>Continente</label>
                <Select 
                    value={values.continent} 
                    name="continent" 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    error={touched.continent && errors.continent}
                >
                    <option value="">Seleccionar continente...</option>
                    {data?.continente?.map(continente => (
                        <option value={continente} key={continente}>{continente}</option>
                    ))}
                    {/* <option value="Europa">Europa</option>
                    <option value="Otro">Otro</option> */}
                </Select>
                {touched.continent && errors.continent && <ErrorText>{errors.role}</ErrorText>}
            </div>
            {values.continent === "America" && (
                <div>
                    <label>Región</label>
                    <Select 
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
                    </Select>
                    {touched.continent && errors.continent && <ErrorText>{errors.role}</ErrorText>}
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