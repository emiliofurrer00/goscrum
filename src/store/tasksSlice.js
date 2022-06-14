import { createSlice } from '@reduxjs/toolkit';
import { createTask, fetchAllTasks } from '../api/requests';

const initialState = {
    allTasks: []
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        saveTasks: (state, action) => {
            const { result } = action.payload;
            console.log(`saveTasks payload:`);
            console.log(result);
            state.allTasks = result;
        },
        // deleteTask: async(state, action) => {
        //     const { id } = action.payload;
        //     const response = await removeTaskById(id);
        //     console.log(`Deleted task with id ${id}`);
        //     console.log(response);
        // }
    }
});

export const createNewTask = (newTask) => (dispatch) => {
    createTask(newTask)
        .then(() => fetchAllTasks())
        .then(newResults => dispatch(saveTasks(newResults)))
        .catch(err => console.log(err))
}

export const { saveTasks, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer




