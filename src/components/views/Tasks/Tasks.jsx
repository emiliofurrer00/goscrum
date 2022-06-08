import './Tasks.styles.css';
import { TasksSection } from './Tasks.styles';
import { Container } from './Tasks.styles';

import Header from '../../Header/Header';
import TaskForm from '../../TaskForm/TaskForm';
import TaskCard from '../../TaskCard/TaskCard';

import { useResize } from '../../hooks/useResize';
import mockData from './mockData';

//Tasks VIEW component. Should modularize tasks-list into a separate component.
const Tasks = () => {
    const isMobile = useResize();
    return (
        <>
            <Header tasksNumber={mockData.length}/>
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
                    {isMobile ? <MobileLayout/> : <DesktopLayout/>}                
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
            justifyContent: 'space-between',
            gap: 10
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                flex: 1,
                padding: 8,
                borderRadius: 8
            }}>
                <h4>Nuevas</h4>
                {mockData.filter(task => task.status === 'new').map(task => <TaskCard data={task} key={task.date}></TaskCard>)}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                flex: 1,
                padding: 8,
                borderRadius: 8
            }}>
                <h4>En progreso</h4>
                {mockData.filter(task => task.status === 'in progress').map(task => <TaskCard data={task} key={task.date}></TaskCard>)}
            </div>            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                flex: 1,
                padding: 8,
                borderRadius: 8
            }}>
                <h4>Completadas</h4>
                {mockData.filter(task => task.status === 'completed').map(task => <TaskCard data={task} key={task.date}></TaskCard>)}
            </div>
        </div>
    )
}

const MobileLayout = () => {
    return (
        <>
            {mockData.map(task => <TaskCard data={task} key={task.date}></TaskCard>)}
        </>
    )
}

export default Tasks;