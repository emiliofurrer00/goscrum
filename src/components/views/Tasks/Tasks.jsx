import './Tasks.styles.css';
import { TasksSection } from './Tasks.styles';
import { Container } from './Tasks.styles';

import Header from '../../Header/Header';
import TaskForm from '../../TaskForm/TaskForm';
import TaskCard from '../../TaskCard/TaskCard';

import { useResize } from '../../hooks/useResize';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveTasks } from '../../../store/tasksSlice';
import { fetchAllTasks } from '../../../api/requests';
import { useNavigate } from 'react-router-dom';

//Tasks VIEW component. Should modularize tasks-list into a separate component.
const Tasks = () => {
    //const [tasks, setTasks] = useState(null);
    //const [username, setUsername] = useState("");
    useEffect(() => {
        fetchAllTasks()
            .then(resultados => dispatch(saveTasks(resultados)))
            .catch(e => {
                console.log("Se presentó el siguiente problema: ");
                console.log(e);
            })
    }, [])
    
    //>>>TRYING SOME STUFF AND TESTING REDUX
    const tasks = useSelector((state) => state.tasks.allTasks)
    const dispatch = useDispatch();
    const isMobile = useResize();


    useEffect(() => {
        console.log(tasks)
    }, [tasks]);

    if (!tasks){
        return <h2>Loading...</h2>
    }

    return (
        <>
            <Header tasksNumber={tasks?.length || 0}/>
            <Container>            
                <TaskForm />
                <TasksSection>
                    <h2 className="tasks-view-title heading-title">Mis tareas</h2>            
                    <div className="tasks-filter-controls">
                        <div className="ownership-filter-container">
                            <label htmlFor="all-tasks-filter">
                                <input type="radio" id="all-tasks-filter" name="drone" value="todas" defaultChecked/>
                                Todas
                            </label>
                            <label htmlFor="my-tasks-filter">
                                <input type="radio" id="my-tasks-filter" name="drone" value="propias"/>
                                Mis Tareas
                            </label>
                        </div>
                        <input placeholder="Seleccionar por título..."/>
                        <select placeholder="Seleccionar por prioridad...">
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                        </select>
                    </div>
                    {isMobile ? <MobileLayout tasks={tasks}/> : <DesktopLayout tasks={tasks}/>}                
                </TasksSection>                     
            </Container>
        </>    
    )
};

const DesktopLayout = ({tasks}) => {
    //Refactorizar de forma tal que el filtrado se ejecute una sola vez y en una misma funcion con UseEffect
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                padding: 8,
                borderRadius: 8
            }}>
                <h4>Nuevas</h4>
                {tasks.filter(task => task.status === 'NEW').map(task => <TaskCard data={task} key={task.createdAt}></TaskCard>)}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                padding: 8,
                borderRadius: 8
            }}>
                <h4>En progreso</h4>
                {tasks.filter(task => task.status === 'IN PROGRESS').map(task => <TaskCard data={task} key={task.createdAt}></TaskCard>)}
            </div>            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                padding: 8,
                borderRadius: 8
            }}>
                <h4>Completadas</h4>
                {tasks.filter(task => task.status === 'FINISHED').map(task => <TaskCard data={task} key={task.createdAt}></TaskCard>)}
            </div>
        </div>
    )
}

const MobileLayout = ({tasks}) => {
    return (
        <>
            {tasks.map(task => <TaskCard data={task} key={task.createdAt}></TaskCard>)}
        </>
    )
}

export default Tasks;