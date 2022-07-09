import { createSlice } from '@reduxjs/toolkit'

export const GeneralSlice = createSlice({
    name: 'General',
    initialState: {
        loading: false,
        toastState: {
            show: false,
            message: "",
            color: ""
        }
    },
    reducers: {
        setLoadingState: (state, action) => {
            state.loading = action.payload
        },
        setToastState: (state, action) => {
            state.toastState = action.payload
        }
    }
})

export const { setLoadingState, setToastState } = GeneralSlice.actions

export default GeneralSlice.reducer