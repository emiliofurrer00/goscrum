import React from 'react'
import { StyledForm } from './TaskForm.styles'
import { useFormik } from 'formik';

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

    const formik = useFormik({
        initialValues,
        onSubmit
    });

    const { handleSubmit, handleChange } = formik

    return (
        <section>
            <h2 className="heading-title">Crear tarea</h2>
            <p>Creá y modificá una nueva tarea</p>
            <StyledForm onSubmit={handleSubmit}>
                    <input name="title" placeholder="Titulo" onChange={handleChange}/>
                    <select name="status" onChange={handleChange}>
                        <option value="">Seleccionar estado</option>
                        <option value="new">Nuevo</option>
                        <option value="inProcess">En proceso</option>
                        <option value="finished">Finalizado</option>
                    </select>
                    <select name="priority" onChange={handleChange}>
                        <option>Seleccionar prioridad</option>
                        <option value="low">Probando</option>
                        <option value="medium">Probando</option>
                        <option value="high">Probando</option>
                    </select>
                    <textarea placeholder="Descripción (opcional)" onChange={handleChange}/>
                    <button type="submit">Crear</button>
            </StyledForm>
        </section>
    )
}

export default TaskForm