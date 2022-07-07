import { useEffect } from "react"
import * as ProfessorAllocationService from "../../services/ProfessorAllocationService"
import ExpansionItem from "../../components/ExpansionItem"
import CourseAllocationCard from "./components/CourseAllocationCard"
import Button from "../../components/Button"
import Dialog from "../../components/Dialog"
import FormCreateCourse from "./components/FormCreateCourse"
import { useSelector, useDispatch } from 'react-redux'
import { stateModalFormCourse, setCoursesState } from './courseState/CourseState'

export default function () {

    const modalFormCourse = useSelector(state => state.course.modalFormCourse)
    const courses = useSelector(state => state.course.courses)
    const dispatch = useDispatch()

    const getData = async () => {
        const { data } = await ProfessorAllocationService.GetCourses()
        dispatch(setCoursesState(data))
    }

    const deleteCourse = async (_id) => {
        const result = window.confirm("Você deseja realmente deletar este curso?")
        if (result) {
            await ProfessorAllocationService.DeleteCourseById({ _id })
            getData()
        }

    }

    const openForm = async (_id = null) => {
        let dataToForm = null;

        if (_id) {
            const { data } = await ProfessorAllocationService.GetCourseById({ _id })
            dataToForm = data
        }

        dispatch(stateModalFormCourse(modalFormCourse.modal ? { modal: false } : { modal: true, _id, dataToForm }))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="page-content">
            <div className="dp-flex space-between al-center">
                <div>
                    <h2>Lista de Cursos</h2>
                </div>
                <div>
                    <Button label="Criar curso" onClick={() => openForm()}></Button>
                </div>
            </div>
            {courses.map((cs, key) => <ExpansionItem
                title={cs.name}
                children={cs.allocations.map((al, keyB) => {
                    return (<CourseAllocationCard key={keyB} {...al} />)
                })}
                slotafter={<> <div className="mb-10px">
                    <Button label="Editar" className="bg-purple mr-05px" onClick={() => openForm(cs.id)} />
                    <Button label="Apagar" className="bg-red" onClick={() => deleteCourse(cs.id)} />
                </div></>}
                key={key} classCustom="mb-05px" />)}

            <Dialog state={modalFormCourse.modal} children={modalFormCourse.modal && <FormCreateCourse />}>
            </Dialog>
        </div>
    )
}