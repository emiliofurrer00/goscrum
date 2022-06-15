import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import { ErrorText, Input } from '../../TaskForm/TaskForm.styles';
import { Title } from './Login.styles';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../../store/userSlice';

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
    const dispatch = useDispatch();

    const initialValues = {
        userName: "",
        password: "",
    };

    const required = "Campo obligatorio";

    const validationSchema = () => 
        Yup.object().shape({
            userName: Yup.string()
                .min(4, "La cantidad mínima de caracteres es 4")
                .required(required),
            password: Yup.string()
                .required(required),
    })

    const [loginError, setLoginError] = useState("");

    const onSubmit = async (values, actions) => {
        const {userName, password} = values;
        //console.log(values);
        const response = await handleLogin(userName, password);
        //console.log(response)
        if (response.status_code === 200) {
            console.log(response)
            const { user: userData } = response.result; 
            dispatch(saveUserData(userData));
            localStorage.setItem("username", response.result.user.userName);
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
        validationSchema,
        onSubmit
    });

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
            <Title>Iniciar sesión</Title>
            <div>
                <label>Nombre de usuario</label>
                <Input 
                    value={values.userName} 
                    name="userName" 
                    type="text" 
                    onChange={handleChange}
                    error={errors.userName}
                    onBlur={handleBlur} 
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
                    error={errors.password} 
                />
                {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
            </div>
            <input type="submit"/>
            {loginError && <p style={{color: 'red'}}>{loginError}</p>}            
            <Link className="link" to="/register">Registrarme</Link>
            </form>
        </div>
    )
}

export default Login