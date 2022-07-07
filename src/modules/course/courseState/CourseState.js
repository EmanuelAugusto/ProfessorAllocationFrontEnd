import { createSlice } from '@reduxjs/toolkit'

export const CourseSlice = createSlice({
    name: 'Course',
    initialState: {
        modalFormCourse: { modal: false, _id: null },
        courses: []
    },
    reducers: {
        stateModalFormCourse: (state, action) => {
            state.modalFormCourse = action.payload
        },
        setCoursesState: (state, action) => {
            state.courses = action.payload
        }
    }
})

export const { stateModalFormCourse, setCoursesState } = CourseSlice.actions

export default CourseSlice.reducer