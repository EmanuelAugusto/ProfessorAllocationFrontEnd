import { configureStore } from '@reduxjs/toolkit'
import CourseState from '../modules/course/courseState/CourseState'
import DepartmentsState from '../modules/department/departmentState/DepartmentState'

export default configureStore({
    reducer: {
        course: CourseState,
        departments: DepartmentsState
    }
})