import { createSlice } from '@reduxjs/toolkit'

export const GeneralSlice = createSlice({
    name: 'General',
    initialState: {
        loading: false
    },
    reducers: {
        setLoadingState: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setLoadingState } = GeneralSlice.actions

export default GeneralSlice.reducer