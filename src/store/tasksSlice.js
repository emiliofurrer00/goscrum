import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTasks, removeTaskById } from '../api/requests';

const initialState = {
    allTasks: []
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getAllTasks: async(state) => {
            const response = await fetchAllTasks();
            console.log(response);
            console.log(response.result);
            state.allTasks = response.result;
        },
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

export const { getAllTasks, saveTasks, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer




