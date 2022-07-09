import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import * as ProfessorAllocationService from "../../../services/ProfessorAllocationService"
import { stateModalFormProfessors, setProfessorsState } from '../ProfessorsState/ProfessorsState'
import Select from "../../../components/Select"

export default function () {

    const nameInput = useRef(null)
    const cpfInput = useRef(null)
    const departmentInput = useRef(null)

    const dispatch = useDispatch()
    const modalFormProfessors = useSelector(state => state.professors.modalFormProfessors)
    const departments = useSelector(state => state.departments.departments)

    const saveData = async (evt) => {
        evt.preventDefault()

        const id = modalFormProfessors?.dataToForm?.id || null

        if (id) {
            await ProfessorAllocationService.EditProfessor({
                _id: modalFormProfessors.dataToForm.id,
                name: nameInput.current.value,
                cpf: cpfInput.current.value,
                departmentId: departmentInput.current.value
            })
        } else {
            await ProfessorAllocationService.SaveProfessor({
                name: nameInput.current.value,
                cpf: cpfInput.current.value,
                departmentId: departmentInput.current.value
            })
        }

        nameInput.current.value = ""

        const { data } = await ProfessorAllocationService.GetProfessors()

        dispatch(setProfessorsState(data))

        closeModal()

    }

    const closeModal = () => {
        dispatch(stateModalFormProfessors({ modal: false }))
    }

    useEffect(() => {
        if (modalFormProfessors._id) {
            nameInput.current.value = modalFormProfessors.dataToForm.name
            cpfInput.current.value = modalFormProfessors.dataToForm.cpf
            departmentInput.current.value = modalFormProfessors.dataToForm.departmentId
        }
    }, [])

    return (
        <div>
            <div className="dp-flex space-between al-center mb-10px">
                <div>
                    Novo professor
                </div>
                <div>
                    <Button label="X" className="bg-red" onClick={() => closeModal()} />
                </div>
            </div>
            <form onSubmit={saveData}>
                <div className="dp-flex fl-row">
                    <div className="mb-10px dp-flex">
                        <Input innerRef={nameInput}
                            id="name"
                            type="text"
                            customClass="width-100cent"
                            placeholder="Informe o nome do professor" />
                    </div>
                    <div className="mb-10px dp-flex">
                        <Input innerRef={cpfInput}
                            id="cpf"
                            type="text"
                            maxlength={11}
                            customClass="width-100cent"
                            placeholder="Informe o nome do cpf do professor" />
                    </div>
                    <div className="mb-10px dp-flex">
                        <Select innerRef={departmentInput}
                            id="name"
                            customClass="width-100cent"
                            placeholder="Informe o nome do cpf do professor"
                            options={departments}
                            optionLabel="name"
                            optionValue="id" />
                    </div>
                </div>
                <div className="dp-flex jt-end space-around">
                    <Button label="Salvar" type="submit" />
                </div>
            </form>
        </div>
    )
}