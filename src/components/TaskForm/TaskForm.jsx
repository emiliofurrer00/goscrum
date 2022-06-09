import React, {useState} from 'react'
import { ErrorText, Input, Select, StyledForm } from './TaskForm.styles'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createTask } from '../../api/requests';

function TaskForm() {
    const initialValues = {
        title: "",
        status: "",
        importance: "",
        description: ""
    }

    const onSubmit = (values) => {
        console.log(values);
        createTask(values);
    }

    const requiredError = "Campo obligatorio"

    const validationSchema = 
        Yup.object().shape({
            title: Yup.string().min(6, "La cantidad mínima de caracteres es 6").required(requiredError),
            status: Yup.string().required(requiredError),
            importance: Yup.string().required(requiredError),
            description: Yup.string().required(requiredError)
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
                        <option value="NEW">Nuevo</option>
                        <option value="IN PROGRESS">En proceso</option>
                        <option value="FINISHED">Finalizado</option>
                    </Select>
                    {errors.status && <ErrorText>{errors.status}</ErrorText>}
                    <Select name="importance" onChange={handleChange} error={errors.importance !== undefined}>
                        <option value="">Seleccionar prioridad</option>
                        <option value="LOW">Baja</option>
                        <option value="MEDIUM">Mediana</option>
                        <option value="HIGH">Alta</option>
                    </Select>
                    {errors.priority && <ErrorText>{errors.priority}</ErrorText>}
                    <textarea name="description" placeholder="Descripción" onChange={handleChange}/>
                    <button type="submit">Crear</button>
            </StyledForm>
        </section>
    )
}

export default TaskForm