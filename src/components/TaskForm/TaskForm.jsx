import React, {useState} from 'react'
import { ErrorText, Input, Select, StyledForm } from './TaskForm.styles'
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
            <p style={{marginBottom: 10}}>Creá y modificá una nueva tarea</p>
            <StyledForm onSubmit={handleSubmit}>
                    <Input name="title" placeholder="Titulo" onChange={handleChange} error={errors.title !== undefined}/>
                    {errors.title && <ErrorText>{errors.title}</ErrorText>}
                    <Select name="status" onChange={handleChange} error={errors.status !== undefined}>
                        <option value="">Seleccionar estado</option>
                        <option value="new">Nuevo</option>
                        <option value="inProcess">En proceso</option>
                        <option value="finished">Finalizado</option>
                    </Select>
                    {errors.status && <ErrorText>{errors.status}</ErrorText>}
                    <Select name="priority" onChange={handleChange} error={errors.priority !== undefined}>
                        <option>Seleccionar prioridad</option>
                        <option value="low">Probando</option>
                        <option value="medium">Probando</option>
                        <option value="high">Probando</option>
                    </Select>
                    {errors.priority && <ErrorText>{errors.priority}</ErrorText>}
                    <textarea placeholder="Descripción (opcional)" onChange={handleChange}/>
                    <button type="submit">Crear</button>
            </StyledForm>
        </section>
    )
}

export default TaskForm