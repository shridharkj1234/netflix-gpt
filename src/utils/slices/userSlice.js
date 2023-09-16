import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUser: null
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        userLoggedIn: (state,action)=>{
            state.loggedInUser =  action.payload
        },
        userLoggedOut: (state,action)=>{
            state.loggedInUser = null
        }

    }
})
export const { userLoggedIn, userLoggedOut } = userSlice.actions
export default userSlice.reducer