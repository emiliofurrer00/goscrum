import React from 'react'
import { TaskCard as TaskCardContainer, StatusBtn, PriorityBtn } from './TaskCard.styles';

const TaskCard = ({data}) => {
    const {
        title,
        date,
        creator,
        finished,
        priority,
        description = ""
    } = data;

    return (
        <TaskCardContainer>
            <button className="delete-btn">X</button>
            <h3 className="task-title">{title}</h3>
            <h5>{date}</h5>
            <h5>{creator}</h5>
            <div className="task-statuses">
                <StatusBtn finished={finished}>{finished ? "finished" : "in progress"}</StatusBtn>
                <PriorityBtn priority={priority}>{priority}</PriorityBtn>
            </div>
            <p>{description}</p>
        </TaskCardContainer>
    )
}


export default TaskCard