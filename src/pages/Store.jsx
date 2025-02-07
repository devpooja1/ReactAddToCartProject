import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";


const store= configureStore({
    reducer:{

        mycart:cartReducer

    }
})
export default store;