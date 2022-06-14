import React, { useState } from 'react'
import { fetchAllTasks, removeTaskById } from '../../api/requests';
import { TaskCard as TaskCardContainer, StatusBtn, PriorityBtn } from './TaskCard.styles';
import { useDispatch } from 'react-redux';
import { saveTasks } from '../../store/tasksSlice'

const TaskCard = ({data, i = 1}) => {
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
    const [animate, setAnimate] = useState("show")

    const dateString = new Date(createdAt).toLocaleString();
    const { userName } = user;

    async function handleRemoveTask(){
        setAnimate("delete");
        setTimeout(async() => {
            await removeTaskById(_id);
            fetchAllTasks().then(resultados => dispatch(saveTasks(resultados)));
        }, 500)
    }

    return (
        <TaskCardContainer key={_id} variants={item} custom={i} initial="hidden" animate={animate}> 
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
            {/* <button onClick={() => setAnimate("delete")}>ASDASD</button> */}
        </TaskCardContainer>
    )
}

const item = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: (i+1) * 0.25,
            ease: 'easeInOut'
        }
    }),
    delete: {

        y: 0,
        opacity: 0,
        transition: {
            duration: 1
        }
    }
}


export default TaskCard