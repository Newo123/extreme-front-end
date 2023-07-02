import {
	FieldErrors,
	FieldValues,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';

export interface IAuthState {
	user: {
		user: IPublicUser;
		token: string;
	};
	isLogged: boolean;
	isLoading: boolean;
	error: string | null;
}

export interface IPublicUser {
	id: string;
	full_name: string;
	nick_name: string;
	email: string;
	created_at: string;
	updated_at: string;
}

export interface ILoginData {
	email: string;
	password: string;
}

export interface IRegisterUser {
	full_name: string;
	nick_name: string;
	email: string;
	password: string;
	phone: string;
}

export interface IPropsLoginPage<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
> {
	navigate: (to: string) => void;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
	isLoading: boolean;
	handleSubmit: UseFormHandleSubmit<TFieldValues, undefined>;
}

export interface IPropsRegisterPage<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
> {
	navigate: (to: string) => void;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
	isLoading: boolean;
	handleSubmit: UseFormHandleSubmit<TFieldValues, undefined>;
}
