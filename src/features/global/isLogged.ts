import { createSlice } from '@reduxjs/toolkit';

export const isLogged = createSlice({
    name: 'isLogged',
    initialState: {
        value: false,
    },
    reducers: {
        setFalseIsLogged: (state) => {
            state.value = false
            
        },
        setTrueIsLogged: (state) => {
            state.value = true
        }
    }
})

export const { setFalseIsLogged, setTrueIsLogged } = isLogged.actions;

export default isLogged.reducer;