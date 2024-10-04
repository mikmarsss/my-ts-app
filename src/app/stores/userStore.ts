import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../features/user/userSlice';

const userStore = configureStore({
    reducer: {
        user: userReducer,
    },

});

export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch;

export default userStore;