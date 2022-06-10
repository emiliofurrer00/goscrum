import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTasks } from '../api/requests';

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
            state.allTasks = action.payload.result;
        }
    }
});

export const { getAllTasks, saveTasks } = tasksSlice.actions;
export default tasksSlice.reducer




