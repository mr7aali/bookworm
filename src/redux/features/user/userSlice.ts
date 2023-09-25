import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
export const loginWithGoogle = createAsyncThunk("user/loginWithGoogle", async () => {

    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, provider);

    return data.user.email;
});


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.email = action.payload as string;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {

        // ! create User
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

        // ! login User
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


        // ! loginWithGoogle
        builder.addCase(loginWithGoogle.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.isError = false;
        }).addCase(loginWithGoogle.fulfilled, (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
            state.error = null;
            state.isError = false;
        }).addCase(loginWithGoogle.rejected, (state, action) => {
            state.user.email = null;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        });

    }
});


export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;