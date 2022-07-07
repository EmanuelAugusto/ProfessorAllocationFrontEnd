import { configureStore } from '@reduxjs/toolkit'
import CourseState from '../modules/course/courseState/CourseState'

export default configureStore({
    reducer: {
        course: CourseState
    }
})