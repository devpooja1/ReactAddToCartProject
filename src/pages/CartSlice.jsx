import { createSlice } from "@reduxjs/toolkit";
// import {message} from "antd"


const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state, actions)=>{
            const data = state.cart.filter(key=>key.id==actions.payload.id)
            // console.log(data)
            if(data.length>=1)
            {
                alert("Product alredy added!!!")
            }
            else{
                state.cart.push(actions.payload)
            }
            
            
            // console.log(actions.payload)
        }
    }

})
export const {addtoCart} = cartSlice.actions;
export default cartSlice.reducer;
