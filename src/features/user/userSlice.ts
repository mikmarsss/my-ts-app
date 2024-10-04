import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../../entities/Models/userModel';
import UserService from '../../app/service/userService';


interface UserState {
    users: UserModel[];
    archivedUsers: UserModel[];
    hiddenUsers: UserModel[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    archivedUsers: [],
    hiddenUsers: [],
    loading: false,
    error: null,
};

// Создаем асинхронное действие для получения пользователей
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await UserService.GetUsers();
    console.log(response.data)
    return response.data;
});


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        hideUser: (state, action: PayloadAction<UserModel>) => {
            const user = action.payload;
            if (!state.hiddenUsers.some(u => u.id === user.id)) {
                state.hiddenUsers.push(user);
                state.users = state.users.filter(u => u.id !== user.id);
            }
        },
        showUser: (state, action: PayloadAction<UserModel>) => {
            const user = action.payload;
            state.hiddenUsers = state.hiddenUsers.filter(u => u.id !== user.id);
            if (!state.users.some(u => u.id === user.id)) {
                state.users.push(user);
            }
            state.archivedUsers = state.archivedUsers.filter(u => u.id !== user.id)
            if (!state.users.some(u => u.id === user.id)) {
                state.users.push(user);
            }
        },
        archiveUser: (state, action: PayloadAction<UserModel>) => {
            const user = action.payload;
            if (!state.archivedUsers.some(u => u.id === user.id)) {
                state.archivedUsers.push(user);
                state.users = state.users.filter(u => u.id !== user.id);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserModel[]>) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { hideUser, showUser, archiveUser } = userSlice.actions;
export default userSlice.reducer;