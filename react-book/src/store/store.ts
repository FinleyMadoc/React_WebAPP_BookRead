import { configureStore, Middleware } from "@reduxjs/toolkit"; 

import counterReducer from '@/store/slice/counterSlice';
import searchReducer from '@/store/slice/searchSlice';


const middleware:Middleware[] = [];

const rootReducer = {
    counter: counterReducer,
    search: searchReducer
};

export const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
