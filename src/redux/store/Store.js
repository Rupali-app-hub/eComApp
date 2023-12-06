import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../slices/cartSlice'

export default configureStore ({
    reducer:{
        cart:CartReducer
    }
})