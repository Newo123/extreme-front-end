export interface IAuthState {
	user: {
		user: IPublicUser;
		token: string;
	};
	isLogged: boolean;
	isLoading: boolean;
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
