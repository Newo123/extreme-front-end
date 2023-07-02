import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginData, IRegisterUser } from '../../../common/types/auth';
import { instance } from '../../../utils/axios';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (request: ILoginData, { rejectWithValue, dispatch }) => {
		try {
			const { data } = await instance
				.post('/auth/login', request)
				.catch(error => {
					throw new Error(error.response.data.message);
				});

			localStorage.setItem('token', data.token);
			localStorage.setItem('name', data.email);

			return data;
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (request: IRegisterUser, { rejectWithValue }) => {
		try {
			const { data } = await instance
				.post('/auth/register', request)
				.catch(error => {
					throw new Error(error.response.data.message);
				});

			localStorage.setItem('token', data.token);
			localStorage.setItem('name', data.email);

			return data;
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);

export const recoveryPassword = createAsyncThunk(
	'auth/recoveryPassword',
	async (request: string, { rejectWithValue }) => {
		try {
			await instance.patch('/auth/password-recovery', request).catch(error => {
				throw new Error(error.response.data.message);
			});
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);
