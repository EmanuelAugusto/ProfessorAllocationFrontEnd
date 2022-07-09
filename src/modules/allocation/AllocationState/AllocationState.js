import { createSlice } from '@reduxjs/toolkit'

export const AllocationSlice = createSlice({
    name: 'Allocation',
    initialState: {
        modalFormAllocation: { modal: false, _id: null },
        allocation: []
    },
    reducers: {
        stateModalFormAllocation: (state, action) => {
            state.modalFormAllocation = action.payload
        },
        setAllocationState: (state, action) => {
            state.allocation = action.payload
        }
    }
})

export const { stateModalFormAllocation, setAllocationState } = AllocationSlice.actions

export default AllocationSlice.reducer