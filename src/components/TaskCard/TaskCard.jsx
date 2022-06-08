import React from 'react'
import { TaskCard as TaskCardContainer, StatusBtn, PriorityBtn } from './TaskCard.styles';

const TaskCard = ({data}) => {
    const {
        title,
        createdAt,
        user,
        status,
        importance,
        description = ""
    } = data;

    const dateString = new Date(createdAt).toLocaleString();
    const { userName } = user;

    return (
        <TaskCardContainer>
            
            <h3 className="task-title">{title}<button className="delete-btn">X</button></h3>
            <h5>{dateString}</h5>
            <h5>{userName}</h5>
            <div className="task-statuses">
                <StatusBtn status={status}>{status}</StatusBtn>
                <PriorityBtn priority={importance}>{importance}</PriorityBtn>
            </div>
            <p>{description}</p>
        </TaskCardContainer>
    )
}


export default TaskCard