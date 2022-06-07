import './Tasks.styles.css';
import { Container } from './Tasks.styles';
import Header from '../../Header/Header';
import mockData from './mockData';
import { useResize } from '../../hooks/useResize';
import TaskCard from '../../TaskCard/TaskCard';

//Tasks VIEW component. Should modularize tasks-list into a separate component.
const Tasks = () => {
    const isMobile = useResize();
    return (
        <>
            <Header tasksNumber={mockData.length}/>
            <Container>            
                <div className="tasks-filter-controls">
                    <div className="ownership-filter-container">
                        <label for="all-tasks-filter">
                            <input type="radio" id="all-tasks-filter" name="drone" value="todas" checked/>
                            Todas
                        </label>
                        <label for="my-tasks-filter">
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
                <h2 className="tasks-view-title">Mis tareas</h2>
                {mockData.map(task => <TaskCard data={task} key={task.date}></TaskCard>)}
                <p>{isMobile ? ' mobile' : ' desktop'}</p>
            </Container>
        </>    
    )
};

export default Tasks;