import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { api } from "../services/auth/api";
import auth from "./auth/auth.slice";


// create the store
export const createStore = (
    options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            auth
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
        devTools: process.env.NODE_ENV !== "production",
        ...options
    });

export const store = createStore();

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("token", state.auth.token);
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
