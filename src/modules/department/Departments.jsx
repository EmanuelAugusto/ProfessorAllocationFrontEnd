import Button from "../../components/Button"
import Item from "../../components/Item"
import Dialog from "../../components/Dialog"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import * as ProfessorAllocationService from "../../services/ProfessorAllocationService"
import { stateModalFormDepartment, setDepartmentsState } from './departmentState/DepartmentState'
import FormCreateDepartment from "./components/FormCreateDepartment"
import Toast from "../../utils/Toast"

export default function () {
    const departments = useSelector(state => state.departments.departments)
    const modalFormDepartment = useSelector(state => state.departments.modalFormDepartment)

    const dispatch = useDispatch()

    const getData = async () => {
        const { data } = await ProfessorAllocationService.GetDepartments()
        dispatch(setDepartmentsState(data))
    }

    const openForm = async (_id = null) => {
        let dataToForm = null;

        if (_id) {
            const { data } = await ProfessorAllocationService.GetDepartmentsById({ _id })
            dataToForm = data
        }

        dispatch(stateModalFormDepartment(modalFormDepartment.modal ? { modal: false } : { modal: true, _id, dataToForm }))
    }

    const deleteDepartment = async (_id) => {
        const result = window.confirm("Você deseja realmente deletar este departamento?")
        if (result) {
            await ProfessorAllocationService.DeleteDepartamentById({ _id })
            getData()
        }

        Toast({
            message: "Sucesso ao deletar departamento",
            color: "success",
            time: 2000,
            show: true
        })


    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <div className="page-content">
                <div className="dp-flex space-between al-center">
                    <div>
                        <h2>Lista de Departamentos</h2>
                    </div>
                    <div>
                        <Button label="Criar Departamento" onClick={() => openForm()}></Button>
                    </div>
                </div>
                {departments.map((cs, key) => <Item
                    title={cs.name}
                    key={key}
                    classCustom="mb-05px"
                    slotafter={<> <div className="mb-10px">
                        <Button label="Editar" className="bg-purple mr-05px" onClick={() => openForm(cs.id)} />
                        <Button label="Apagar" className="bg-red" onClick={() => deleteDepartment(cs.id)} />
                    </div></>}
                />)}
            </div>


            <Dialog state={modalFormDepartment.modal} children={modalFormDepartment.modal && <FormCreateDepartment />}>
            </Dialog>
        </div>
    )
}