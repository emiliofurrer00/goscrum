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
        filterTasks: (state, action) => {
            const { filterWord } = action.payload;
            console.log("Word to filter with: "+filterWord);
            state.allTasks = state.allTasks.filter(task => task.title.includes(filterWord) || task.description.includes(filterWord));
        }
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

export const { saveTasks, deleteTask, filterTasks } = tasksSlice.actions;
export default tasksSlice.reducer




