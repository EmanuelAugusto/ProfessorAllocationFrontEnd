import Button from "../../components/Button"
import Item from "../../components/Item"
import Dialog from "../../components/Dialog"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import * as ProfessorAllocationService from "../../services/ProfessorAllocationService"
import { stateModalFormProfessors, setProfessorsState } from './ProfessorsState/ProfessorsState'
import FormCreateProfessor from "./components/FormCreateProfessor"
import { setDepartmentsState } from '../department/departmentState/DepartmentState'
import Toast from "../../utils/Toast"

export default function () {
    const Professors = useSelector(state => state.professors.professors)
    const modalFormProfessors = useSelector(state => state.professors.modalFormProfessors)

    const dispatch = useDispatch()

    const getData = async () => {
        const { data } = await ProfessorAllocationService.GetProfessors()
        dispatch(setProfessorsState(data))
    }

    const openForm = async (_id = null) => {
        let dataToForm = null;

        if (_id) {
            const { data } = await ProfessorAllocationService.GetProfessorsById({ _id })
            dataToForm = data
        }

        dispatch(stateModalFormProfessors(modalFormProfessors.modal ? { modal: false } : { modal: true, _id, dataToForm }))
    }

    const deleteProfessor = async (_id) => {
        const result = window.confirm("Você deseja realmente deletar este professor?")
        if (result) {
            await ProfessorAllocationService.DeleteProfessorById({ _id })
            getData()
        }

        Toast({
            message: "Sucesso ao deletar professor",
            color: "success",
            time: 2000,
            show: true
        })

    }

    const loadDepartments = async () => {
        const { data } = await ProfessorAllocationService.GetDepartments()
        dispatch(setDepartmentsState(data))
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <div className="page-content">
                <div className="dp-flex space-between al-center">
                    <div>
                        <h2>Lista de Professores</h2>
                    </div>
                    <div>
                        <Button label="Criar Professor" onClick={() => openForm()}></Button>
                    </div>
                </div>
                {Professors.map((cs, key) => <Item
                    title={`${cs.name} - CPF: ${cs.cpf} - Departamento: ${cs.department.name}`}
                    key={key}
                    classCustom="mb-05px"
                    slotafter={<> <div className="mb-10px">
                        <Button label="Editar" className="bg-purple mr-05px" onClick={() => openForm(cs.id)} />
                        <Button label="Apagar" className="bg-red" onClick={() => deleteProfessor(cs.id)} />
                    </div></>}
                />)}
            </div>


            <Dialog state={modalFormProfessors.modal}
                customClass="width-500px"
                children={modalFormProfessors.modal && <FormCreateProfessor />}
                onShow={() => loadDepartments()}>
            </Dialog>
        </div>
    )
}