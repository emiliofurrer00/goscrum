import React from 'react'
import { fetchAllTasks, removeTaskById } from '../../api/requests';
import { TaskCard as TaskCardContainer, StatusBtn, PriorityBtn } from './TaskCard.styles';
import { useDispatch } from 'react-redux';
import { saveTasks } from '../../store/tasksSlice'

const TaskCard = ({data}) => {
    const {
        _id,
        title,
        createdAt,
        user,
        status,
        importance,
        description = ""
    } = data;

    const dispatch = useDispatch();

    const dateString = new Date(createdAt).toLocaleString();
    const { userName } = user;

    async function handleRemoveTask(){
        await removeTaskById(_id);
        fetchAllTasks().then(resultados => dispatch(saveTasks(resultados)))
    }

    return (
        <TaskCardContainer key={_id}> 
            <h3 className="task-title">{title}
                <button onClick={handleRemoveTask} className="delete-btn">X
                </button>
            </h3>
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