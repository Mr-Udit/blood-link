import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/authslice.js"
import rootReducer from "./rootReducer.js";
import { authApi } from "@/features/api/authapi.js";
export const appStore = configureStore({
    reducer:rootReducer,
    middleware : (defaultmiddleware ) => defaultmiddleware().concat(authApi.middleware)
});