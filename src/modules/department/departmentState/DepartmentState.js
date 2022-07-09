import { createSlice } from '@reduxjs/toolkit'

export const DepartmentSlice = createSlice({
    name: 'Department',
    initialState: {
        modalFormDepartment: { modal: false, _id: null },
        departments: []
    },
    reducers: {
        stateModalFormDepartment: (state, action) => {
            state.modalFormDepartment = action.payload
        },
        setDepartmentsState: (state, action) => {
            state.departments = action.payload
        }
    }
})

export const { stateModalFormDepartment, setDepartmentsState } = DepartmentSlice.actions

export default DepartmentSlice.reducer