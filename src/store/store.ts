import {configureStore} from "@reduxjs/toolkit";
import {apodApi} from "./apod/apod.api";

export const store = configureStore({
    reducer: {[apodApi.reducerPath]: apodApi.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apodApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>