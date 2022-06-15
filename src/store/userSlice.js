import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {}
    },
    reducers: {
        saveUserData: (state, action) => {
            console.log('Saving user data');
            state.userData = action.payload;
            console.log('Nuevo state.userData:');
            console.log(state.userData);
        }
    }
})

export const { saveUserData } = userSlice.actions;
export default userSlice.reducer;