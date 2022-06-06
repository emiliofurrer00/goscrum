import './Tasks.styles.css';
import styled from 'styled-components';
import Header from '../../Header/Header';

const StatusBtn = styled.button`
    background-color: ${props => {
        return props.finished ? "#1EC876" : "#FBDE3F"
    }};
    color: ${props => {
        return props.finished ? "white" : "black";
    }};
`

const PriorityBtn = styled.button`
    color: white;
    background-color: ${props => {
        switch (props.priority){
            case "high":
                return "#FF452B";
            case "medium":
                return "orange";
            case "low":
                return "#007BFF";
        }
    }};
`

const Tasks = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h2 className="tasks-view-title">Mis tareas</h2>
                {mockData.map(task => <Task data={task} key={task.date}></Task>)}
            </div>
        </>    
    )
};

const Task = ({data}) => {
    const {
        title,
        date,
        creator,
        finished,
        priority,
        description = ""
    } = data;

    return (
        <div className="task">
            <h3 className="task-title">{title}</h3>
            <h5>{date}</h5>
            <h5>{creator}</h5>
            <div className="task-statuses">
                <StatusBtn finished={finished}>{finished ? "finished" : "in progress"}</StatusBtn>
                <PriorityBtn priority={priority}>{priority}</PriorityBtn>
            </div>
            <p>{description}</p>
        </div>
    )
}

const mockData = [
    {
        title: "Radiohead",
        date: "6/6/2022, 08:53",
        creator: "emiliof",
        finished: false,
        priority: "high",
        description: "Jigsaw Falling Into Place"
    },
    {
        title: "Gustavo Cerati",
        date: "6/6/2022, 08:55",
        creator: "emiliof",
        finished: true,
        priority: "low",
        description: "Bocanada >>> Resto de álbumes"
    }
];

export default Tasks;