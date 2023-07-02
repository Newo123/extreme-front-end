import axios from 'axios';

const token = localStorage.getItem('token');

export const instance = axios.create({
	baseURL: 'http://localhost:3001/api',
	timeout: 5000,
	headers: {
		'X-Custom-Header': 'foobar',
		'Content-Type': 'application/json',
	},
});

export const instanceAuth = axios.create({
	baseURL: 'http://localhost:3001/api',
	timeout: 5000,
	headers: {
		'X-Custom-Header': 'foobar',
		Authorization: `Bearer ${token}`,
	},
});
