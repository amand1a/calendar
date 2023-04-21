import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



interface IInitialState {
    SDate:Date
}
// Define the initial state using that type
const initialState:IInitialState = {
    SDate: new Date()
}

export const dateSlice = createSlice({
    name: 'selected date',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setSDate: (state, action: PayloadAction<Date>) => {
            state.SDate = action.payload
        },
    },
})

export const { setSDate } = dateSlice.actions

// Other code such as selectors can use the imported `RootState` type


const SelectedDate= dateSlice.reducer
export default SelectedDate