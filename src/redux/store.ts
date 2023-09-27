import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { api } from "./api/apiSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;