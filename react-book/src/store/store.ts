import { Middleware } from "@reduxjs/toolkit"; 
import configStore from "@/store/configStore";

import counterReducer from '@/store/slice/counterSlice';
// import searchReducer from '@/store/slice/searchSlice';


const middleware:Middleware[] = [];

const rootReducer = {
    counter: counterReducer,
    // search: searchReducer
};

export const store = configStore(rootReducer, middleware);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
