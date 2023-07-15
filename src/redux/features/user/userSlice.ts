import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase.config';

interface IUserState {
    user: {
        email: string | null;
    };
    isLoading: boolean;
    isError: boolean;
    error: string | null | undefined;
}
interface iCredential {
    email: string;
    password: string;
}
const initialState: IUserState = {
    user: {
        email: null,
    },
    isLoading: false,
    isError: false,
    error: null,
};
export const createUser = createAsyncThunk("user/createUser", async ({ email, password }: iCredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
});
export const loginUser = createAsyncThunk("user/loginUser", async ({ email, password }: iCredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
});


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.isError = false;
        }).addCase(createUser.fulfilled, (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
            state.error = null;
            state.isError = false;
        }).addCase(createUser.rejected, (state, action) => {
            state.user.email = null;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        });

        
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.isError = false;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
            state.error = null;
            state.isError = false;
        }).addCase(loginUser.rejected, (state, action) => {
            state.user.email = null;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        });

    
    }
});

export default userSlice.reducer;