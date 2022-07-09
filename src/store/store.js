import { configureStore } from '@reduxjs/toolkit'
import CourseState from '../modules/course/courseState/CourseState'
import DepartmentsState from '../modules/department/departmentState/DepartmentState'
import ProfessorsState from '../modules/professor/ProfessorsState/ProfessorsState'
import AllocationState from '../modules/allocation/AllocationState/AllocationState'

export default configureStore({
    reducer: {
        course: CourseState,
        departments: DepartmentsState,
        professors: ProfessorsState,
        allocation: AllocationState
    }
})