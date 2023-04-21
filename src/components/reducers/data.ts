import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



// Define a type for the slice state
interface IEvent {
    event:String
    date: Date
}
interface IInitialState {
    events:IEvent[]
}
// Define the initial state using that type
const initialState:IInitialState = {
    events:[]
}

export const dateSlice = createSlice({
    name: 'Events of the date',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload
        },
    },
})

export const { setEvents } = dateSlice.actions

// Other code such as selectors can use the imported `RootState` type


const Data= dateSlice.reducer
export default Data