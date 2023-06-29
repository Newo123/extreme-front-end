import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginData, IRegisterUser } from '../../../common/types/auth';
import { instance } from '../../../utils/axios';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (request: ILoginData, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('/auth/login', request);

			if (data.status === 400 || data.status === 401 || data.status === 500)
				throw new Error('Server Error!');

			localStorage.setItem('token', data.token);
			localStorage.setItem('name', data.user.email);

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
			const { data } = await instance.post('/auth/register', request);

			if (!data) throw new Error('Server Error!');

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
