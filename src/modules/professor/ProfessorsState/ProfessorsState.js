import { createSlice } from '@reduxjs/toolkit'

export const ProfessorsSlice = createSlice({
    name: 'Professors',
    initialState: {
        modalFormProfessors: { modal: false, _id: null },
        professors: []
    },
    reducers: {
        stateModalFormProfessors: (state, action) => {
            state.modalFormProfessors = action.payload
        },
        setProfessorsState: (state, action) => {
            state.professors = action.payload
        }
    }
})

export const { stateModalFormProfessors, setProfessorsState } = ProfessorsSlice.actions

export default ProfessorsSlice.reducer