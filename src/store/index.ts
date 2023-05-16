import {configureStore} from '@reduxjs/toolkit';
import postReducer from './slices/profileSlice.ts';
import dialogReducer from './slices/dialogSlice.ts';
import userReducer from './slices/userSlice.ts';

const store = configureStore({
    reducer: {
        posts: postReducer,
        dialogs: dialogReducer,
        user: userReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch