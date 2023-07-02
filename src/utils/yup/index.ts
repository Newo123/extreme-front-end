import * as yup from 'yup';
import { AppError } from '../../common/errors';

export const RecoveryPasswordSchema = yup.object().shape({
	email: yup
		.string()
		.email(AppError.InvalidEmail)
		.required(AppError.RequiredField),
});

export const LoginSchema = yup.object().shape({
	email: yup
		.string()
		.email(AppError.InvalidEmail)
		.required(AppError.RequiredField),
	password: yup
		.string()
		.min(6, AppError.minLength)
		.required(AppError.RequiredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppError.InvalidPassword,
		),
});

export const RegisterSchema = yup.object().shape({
	full_name: yup.string().required(AppError.RequiredField),
	nick_name: yup.string().required(AppError.RequiredField),
	phone: yup.string().required(AppError.RequiredField),
	email: yup
		.string()
		.email(AppError.InvalidEmail)
		.required(AppError.RequiredField),
	password: yup
		.string()
		.min(6, AppError.minLength)
		.required(AppError.RequiredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppError.InvalidPassword,
		),
	confirm_password: yup
		.string()
		.min(6, AppError.minLength)
		.required(AppError.RequiredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppError.InvalidPassword,
		),
});
