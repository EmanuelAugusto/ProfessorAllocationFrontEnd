import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import * as ProfessorAllocationService from "../../../services/ProfessorAllocationService"
import { stateModalFormCourse, setCoursesState } from '../courseState/CourseState'

export default function () {

    const nameInput = useRef(null)
    const dispatch = useDispatch()
    const modalFormCourse = useSelector(state => state.course.modalFormCourse)

    const saveData = async (evt) => {
        evt.preventDefault()

        const id = modalFormCourse?.dataToForm?.id || null

        if (id) {
            await ProfessorAllocationService.EditCourse({
                _id: modalFormCourse.dataToForm.id,
                name: nameInput.current.value
            })
        } else {
            await ProfessorAllocationService.SaveCourse({
                name: nameInput.current.value
            })
        }

        nameInput.current.value = ""    

        const { data } = await ProfessorAllocationService.GetCourses()

        dispatch(setCoursesState(data))

        closeModal()

    }

    const closeModal = () => {
        dispatch(stateModalFormCourse(false))
    }

    useEffect(() => {
        if(modalFormCourse._id){
            nameInput.current.value = modalFormCourse.dataToForm.name
        }
    }, [])

    return (
        <div>
            <div className="dp-flex space-between al-center mb-10px">
                <div>
                    Novo curso
                </div>
                <div>
                    <Button label="X" className="bg-red" onClick={() => closeModal()} />
                </div>
            </div>
            <form onSubmit={saveData}>
                <div className="mb-10px">
                    <Input innerRef={nameInput} label="Nome do curso" id="name" type="text" placeholder="Informe o nome do curso" />
                </div>
                <div className="dp-flex jt-end space-around">
                    <Button label="Salvar" type="submit" />
                </div>
            </form>
        </div>
    )
}