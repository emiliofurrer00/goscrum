import React from 'react'
import { StyledForm } from './TaskForm.styles'


function TaskForm() {
    return (
        <section>
            <h2 className="heading-title">Crear tarea</h2>
            <p>Creá y modificá una nueva tarea</p>
            <StyledForm>
                    <input placeholder="Titulo" />
                    <select>
                        <option>Probando</option>
                    </select>
                    <select>
                        <option>Probando</option>
                    </select>
                    <textarea placeholder="Descripción (opcional)" />
            </StyledForm>
        </section>
    )
}

export default TaskForm