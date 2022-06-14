import './Tasks.styles.css';
import { TasksSection } from './Tasks.styles';
import { Container } from './Tasks.styles';

import Header from '../../Header/Header';
import TaskForm from '../../TaskForm/TaskForm';
import TaskCard from '../../TaskCard/TaskCard';

import { useResize } from '../../hooks/useResize';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks, saveTasks } from '../../../store/tasksSlice';
import { fetchAllTasks } from '../../../api/requests';
import { motion } from 'framer-motion';
import { categorizeTasks, debounce } from './util';
import styled from 'styled-components';
import { useMemo } from 'react';

//Tasks VIEW component. Should modularize tasks-list into a separate component.
const Tasks = () => {
    const [tasksOwner, setTasksOwner] = useState("");
    const [filterWord, setFilterWord] = useState("");

    useEffect(() => {
        fetchAllTasks(tasksOwner)
            .then(resultados => dispatch(saveTasks(resultados)))
            .catch(e => {
                console.log("Se presentó el siguiente problema: ");
                console.log(e);
            })
    }, [tasksOwner])
    
    //>>>TRYING SOME STUFF AND TESTING REDUX
    const tasks = useSelector((state) => state.tasks.allTasks)
    const dispatch = useDispatch();
    const isMobile = useResize();

    // useEffect(() => {
    //     if (filter){
    //         dispatch(filterTasks())
    //     }
    // }, [filter])

    //Testing debounce
    // function handleInputChange(e){
    //     setFilterWord(e.target.value);
    // }

    // const handleSearch = useMemo(
    //     () => debounce(() => {
    //         console.log(filterWord);
    //         dispatch(filterTasks({filterWord}));
    //     }, 2000),
    //     [filterWord]
    // );

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
                            <div style={{display: 'flex', gap: 8}}>
                                <label htmlFor="all-tasks-filter">
                                    <input type="radio" id="all-tasks-filter" name="drone" value="" onChange={(e) => setTasksOwner(e.target.value)} defaultChecked/>
                                    Todas
                                </label>
                                <label htmlFor="my-tasks-filter">
                                    <input type="radio" id="my-tasks-filter" name="drone" value="ME" onChange={(e) => setTasksOwner(e.target.value)}/>
                                    Mis Tareas
                                </label>                                    
                            </div>
                            <div style={{display: 'flex', gap: 8}}>
                                <input placeholder="Seleccionar por título..."/>
                                <select>
                                    <option>Seleccionar por prioridad...</option>
                                    <option>Alta</option>
                                    <option>Media</option>
                                    <option>Baja</option>
                                </select>                                
                            </div>
                        </div>
                    </div>
                    {isMobile ? <MobileLayout tasks={tasks}/> : <DesktopLayout tasks={tasks}/>}                
                </TasksSection>                     
            </Container>
        </>    
    )
};

const DesktopLayout = ({tasks}) => {
    //Refactorizar de forma tal que el filtrado se ejecute una sola vez y en una misma funcion con UseEffect?
    const _tasks = categorizeTasks(tasks);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8
        }}>
            <TaskColumn>   
                <h4>Nuevas</h4>
                {_tasks && _tasks["NEW"].map((task, index) => <TaskCard i={index} data={task} key={task.createdAt}></TaskCard>)}
            </TaskColumn>
            <TaskColumn i={_tasks["NEW"].length}>
                <motion.h4>En progreso</motion.h4>
                {_tasks["IN PROGRESS"].map((task, index) => <TaskCard i={index+_tasks["NEW"].length} data={task} key={task.createdAt}></TaskCard>)}
            </TaskColumn>            
            <TaskColumn i={_tasks["NEW"].length + _tasks["IN PROGRESS"].length}>
                <h4>Completadas</h4>
                {_tasks["FINISHED"].map((task, index) => <TaskCard i={index+_tasks["NEW"].length+_tasks["IN PROGRESS"].length} data={task} key={task.createdAt}></TaskCard>)}
            </TaskColumn>
        </div>
    )
}

const container = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,
      transition: {        
        //delay: 0.85 + (i * 0.25),
        duration: 0.5,
      }
    }),
};


const TaskColumn = ({children, i = 0}) => {
    return (
        <StyledTaskColumn variants={container} initial="hidden" animate="show" custom={i}>
            {children}
        </StyledTaskColumn>
    )
}

const StyledTaskColumn = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    padding: 8px;
    border-radius: 8px;
    flex: 1;
    gap: 8px;
    & > h4 {
        margin-bottom: 8px;
    }
`

const MobileLayout = ({tasks}) => {
    return (
        <>
            {tasks.map(task => <TaskCard data={task} key={task.createdAt}></TaskCard>)}
        </>
    )
}

export default Tasks;