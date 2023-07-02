import { createSlice } from '@reduxjs/toolkit';
import { IAuthState, IPublicUser } from '../../../common/types/auth';
import { loginUser, recoveryPassword, registerUser } from '../../thunk/auth';

const initialState: IAuthState = {
	user: {
		user: {} as IPublicUser,
		token: '',
	},
	isLogged: false,
	isLoading: false,
	error: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(loginUser.pending, state => {
			state.isLogged = false;
			state.isLoading = true;
			state.error = '';
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
			state.isLoading = false;
			state.error = '';
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.isLogged = false;
			state.isLoading = false;
			state.error = action.payload as string;
		});
		builder.addCase(registerUser.pending, (state, action) => {
			state.isLogged = false;
			state.isLoading = true;
			state.error = '';
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isLogged = true;
			state.isLoading = false;
			state.error = '';
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.isLogged = false;
			state.isLoading = false;
			state.error = action.payload as string;
		});
		builder.addCase(recoveryPassword.pending, (state, action) => {
			state.isLogged = false;
			state.isLoading = false;
			state.error = '';
		});
		builder.addCase(recoveryPassword.fulfilled, (state, action) => {
			state.isLogged = false;
			state.isLoading = false;
			state.error = '';
		});
		builder.addCase(recoveryPassword.rejected, (state, action) => {
			state.isLogged = false;
			state.isLoading = false;
			state.error = action.payload as string;
		});
	},
});

export const { setError } = authSlice.actions;

export default authSlice.reducer;
