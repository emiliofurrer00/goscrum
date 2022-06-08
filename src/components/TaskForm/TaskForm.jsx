import React, {useState} from 'react'
import { StyledForm } from './TaskForm.styles'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function TaskForm() {
    const initialValues = {
        title: "",
        status: "",
        priority: "",
        description: ""
    }

    const onSubmit = () => {
        alert("submitted")
    }

    const requiredError = "Campo obligatorio"

    const validationSchema = 
        Yup.object().shape({
            title: Yup.string().min(6, "La cantidad mínima de caracteres es 6").required(requiredError),
            status: Yup.string().required(requiredError),
            priority: Yup.string().required(requiredError),
            description: Yup.string()
        })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const { handleSubmit, handleChange, errors } = formik;

    return (
        <section>
            <h2 className="heading-title">Crear tarea</h2>
            <p>Creá y modificá una nueva tarea</p>
            <StyledForm onSubmit={handleSubmit}>
                    <input name="title" placeholder="Titulo" onChange={handleChange}/>
                    {errors.title && <p>{errors.title}</p>}
                    <select name="status" onChange={handleChange}>
                        <option value="">Seleccionar estado</option>
                        <option value="new">Nuevo</option>
                        <option value="inProcess">En proceso</option>
                        <option value="finished">Finalizado</option>
                    </select>
                    { errors.status && <p>{errors.status}</p>}
                    <select name="priority" onChange={handleChange}>
                        <option>Seleccionar prioridad</option>
                        <option value="low">Probando</option>
                        <option value="medium">Probando</option>
                        <option value="high">Probando</option>
                    </select>
                    { errors.priority && <p>{errors.priority}</p>}
                    <textarea placeholder="Descripción (opcional)" onChange={handleChange}/>
                    <button type="submit">Crear</button>
            </StyledForm>
        </section>
    )
}

export default TaskForm