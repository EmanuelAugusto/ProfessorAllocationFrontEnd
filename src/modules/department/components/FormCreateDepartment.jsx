import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import * as ProfessorAllocationService from "../../../services/ProfessorAllocationService"
import { stateModalFormDepartment, setDepartmentsState } from '../departmentState/DepartmentState'

export default function () {

    const nameInput = useRef(null)
    const dispatch = useDispatch()
    const modalFormDepartment = useSelector(state => state.departments.modalFormDepartment)

    const saveData = async (evt) => {
        evt.preventDefault()

        const id = modalFormDepartment?.dataToForm?.id || null

        if (id) {
            await ProfessorAllocationService.EditDepartment({
                _id: modalFormDepartment.dataToForm.id,
                name: nameInput.current.value
            })
        } else {
            await ProfessorAllocationService.SaveDepartment({
                name: nameInput.current.value
            })
        }

        nameInput.current.value = ""

        const { data } = await ProfessorAllocationService.GetDepartments()

        dispatch(setDepartmentsState(data))

        closeModal()

    }

    const closeModal = () => {
        dispatch(stateModalFormDepartment({ modal: false }))
    }

    useEffect(() => {
        if (modalFormDepartment._id) {
            nameInput.current.value = modalFormDepartment.dataToForm.name
        }
    }, [])

    return (
        <div>
            <div className="dp-flex space-between al-center mb-10px">
                <div>
                    Novo Departamento
                </div>
                <div>
                    <Button label="X" className="bg-red" onClick={() => closeModal()} />
                </div>
            </div>
            <form onSubmit={saveData}>
                <div className="mb-10px">
                    <Input innerRef={nameInput} 
                           label="Nome do departamento" 
                           id="name" 
                           type="text" 
                           placeholder="Informe o nome do departamento" />
                </div>
                <div className="dp-flex jt-end space-around">
                    <Button label="Salvar" type="submit" />
                </div>
            </form>
        </div>
    )
}