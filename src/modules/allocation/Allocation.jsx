import Button from "../../components/Button"
import Dialog from "../../components/Dialog"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import * as ProfessorAllocationService from "../../services/ProfessorAllocationService"
import { stateModalFormAllocation, setAllocationState } from './AllocationState/AllocationState'
import { setProfessorsState } from '../professor/ProfessorsState/ProfessorsState'
import { setCoursesState } from '../course/courseState/CourseState'
import CourseAllocationCard from "../course/components/CourseAllocationCard"
import FormCreateAllocation from "./components/FormCreateAllocation"

export default function () {
    const allocation = useSelector(state => state.allocation.allocation)
    const modalFormAllocation = useSelector(state => state.allocation.modalFormAllocation)

    const dispatch = useDispatch()

    const getData = async () => {
        const { data } = await ProfessorAllocationService.GetAllocations()
        dispatch(setAllocationState(data))
    }

    const openForm = async (_id = null) => {
        let dataToForm = null;

        if (_id) {
            const { data } = await ProfessorAllocationService.GetProfessorsById({ _id })
            dataToForm = data
        }

        dispatch(stateModalFormAllocation(modalFormAllocation.modal ? { modal: false } : { modal: true, _id, dataToForm }))
    }

    const deleteAllocation = async (_id) => {
        const result = window.confirm("Você deseja realmente deletar esta alocação?")
        if (result) {
            await ProfessorAllocationService.DeleteProfessorById({ _id })
            getData()
        }

    }

    const loadDataToForm = async () => {
        const { data } = await ProfessorAllocationService.GetProfessors()
        dispatch(setProfessorsState(data))
        const { data: dataCourse } = await ProfessorAllocationService.GetCourses()
        dispatch(setCoursesState(dataCourse))
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <div className="page-content">
                <div className="dp-flex space-between al-center">
                    <div>
                        <h2>Lista de Alocações</h2>
                    </div>
                    <div>
                        <Button label="Alocar professor" onClick={() => openForm()}></Button>
                    </div>
                </div>
            </div>
            <div className="pa-10px">

                {allocation.map((al, keyB) => {
                    return (<CourseAllocationCard key={keyB} {...al}  />)
                })}
            </div>
            <Dialog customClass="width-500px"
                state={modalFormAllocation.modal}
                children={modalFormAllocation.modal && <FormCreateAllocation />}
                onShow={() => loadDataToForm()}>
            </Dialog>
        </div>
    )
}