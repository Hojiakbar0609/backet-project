import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../../Data'


const initialState = {
    products: storeData,
    amount: 0,
    total: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        default: (state) => {
            state
        }
    }
})
export const {increment, decrement} = basketSlice.actions
export default basketSlice.reducer