import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./cardSlice";
import authSlice from "./authSlice";
import { reviewsSlice } from "./reviewsSlice";
import card from "./card";

export const store = configureStore({
    reducer: {
        [cardSlice.reducerPath]: cardSlice.reducer,
        [reviewsSlice.reducerPath]: reviewsSlice.reducer,
        auth:authSlice,
        category:card 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardSlice.middleware , reviewsSlice.middleware),
})

export default store