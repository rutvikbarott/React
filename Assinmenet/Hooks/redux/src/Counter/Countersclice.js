import { createSlice } from "@reduxjs/toolkit";




const counterslice= createSlice({
    name: counterslice,
    initialState:{
        value:0
    },
    reducers:{
        incremenet:(state)=>{
            state.value += 1;


        },
        decremenet: (state) => {
            state.value -= 1;
          },
          incrementByAmount: (state, action) => {
            state.value += action.payload;
          }
    }
})

 export const {incremenet,decremenet,incrementByAmount}= counterslice.actions

export default counterslice.reducers