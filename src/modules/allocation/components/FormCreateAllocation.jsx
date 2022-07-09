import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import * as ProfessorAllocationService from "../../../services/ProfessorAllocationService"
import { stateModalFormAllocation, setAllocationState } from '../AllocationState/AllocationState'
import Select from "../../../components/Select"

export default function () {

    const nameInput = useRef(null)
    const professorInput = useRef(null)
    const dayInput = useRef(null)
    const courseInput = useRef(null)
    const startInput = useRef(null)
    const endInput = useRef(null)

    const days = [{ value: 'MONDAY', label: "Segunda-feira" },
    { value: 'TUESDAY', label: "Terça-feira" },
    { value: 'WEDNESDAY', label: "Quarta-feira" },
    { value: 'THURSDAY', label: "Quinta-feira" },
    { value: 'FRIDAY', label: "Sexta-feira" },
    { value: 'SATURDAY', label: "Sábado" },
    { value: 'SUNDAY', label: "Domingo" }]

    const dispatch = useDispatch()
    const modalFormAllocation = useSelector(state => state.allocation.modalFormAllocation)
    const professors = useSelector(state => state.professors.professors)
    const courses = useSelector(state => state.course.courses)

    const saveData = async (evt) => {

        try {
            evt.preventDefault()

            const id = modalFormAllocation?.dataToForm?.id || null

            if (id) {
                await ProfessorAllocationService.EditProfessor({
                    _id: modalFormAllocation.dataToForm.id,
                    teacherId: professorInput.current.value,
                    day: dayInput.current.value,
                    courseId: courseInput.current.value,
                    start: `${startInput.current.value}-0300`,
                    end: `${endInput.current.value}-0300`
                })
            } else {
                await ProfessorAllocationService.SaveAllocation({
                    teacherId: professorInput.current.value,
                    day: dayInput.current.value,
                    courseId: courseInput.current.value,
                    start: `${startInput.current.value}-0300`,
                    end: `${endInput.current.value}-0300`
                })
            }

            nameInput.current.value = ""

            const { data } = await ProfessorAllocationService.GetProfessors()

            dispatch(setAllocationState(data))

            closeModal()
        } catch ({ response: { data: { message } } }) {
            const Errors = {
                time_conflict: "Este professor tem uma disciplina alocada nesse mesmo horário por favor escolha outra"
            }

            alert(Errors[message])
        }


    }

    const closeModal = () => {
        dispatch(stateModalFormAllocation({ modal: false }))
    }

    useEffect(() => {
        if (modalFormAllocation._id) {
            nameInput.current.value = modalFormAllocation.dataToForm.name
            professorInput.current.value = modalFormAllocation.dataToForm.cpf
            dayInput.current.value = modalFormAllocation.dataToForm.departmentId
        }
    }, [])

    return (
        <div>
            <div className="dp-flex space-between al-center mb-10px">
                <div>
                    Nova alocação
                </div>
                <div>
                    <Button label="X" className="bg-red" onClick={() => closeModal()} />
                </div>
            </div>
            <form onSubmit={saveData}>
                <div className="dp-flex fl-row">
                    <div className="mb-10px dp-flex">
                        <Input innerRef={startInput}
                            id="name"
                            type="text"
                            customClass="width-100cent"
                            placeholder="Hora inicial" />
                        <Input innerRef={endInput}
                            id="name"
                            type="text"
                            customClass="width-100cent"
                            placeholder="Hora final" />
                    </div>
                    <div className="mb-10px dp-flex">
                        <Select innerRef={dayInput}
                            id="name"
                            customClass="width-100cent"
                            placeholder="Selecione o dia"
                            options={days}
                            optionLabel="label"
                            optionValue="value" />
                    </div>
                    <div className="mb-10px dp-flex">
                        <Select innerRef={courseInput}
                            id="name"
                            customClass="width-100cent"
                            placeholder="Selecione o curso"
                            options={courses}
                            optionLabel="name"
                            optionValue="id" />
                    </div>
                    <div className="mb-10px dp-flex">
                        <Select innerRef={professorInput}
                            id="name"
                            customClass="width-100cent"
                            placeholder="Escolha o professor"
                            options={professors}
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