import {createSlice} from '@reduxjs/toolkit'

export const usernameSlice = createSlice({
    name: 'cards',
    initialState: {
        value: []
    },
    reducers: {
        updateCardsPayload: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {updateCardsPayload} = usernameSlice.actions
export default usernameSlice.reducer;
