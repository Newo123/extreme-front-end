export const AppError = {
	PasswordDoNotMatch: 'Поле пароль не совпадает',
	InvalidEmail: 'Введите корректный email',
	InvalidPassword:
		'Пароль должен содержать хотя-бы один спецсимвол(@#$%), заглавную букву(A-Z, А-Я) и цифру(0-9)',
	RequiredField: 'Это поле обязательное для заполнения',
	minLength: 'Минимальная длинна 6 символов',
};

export class MyError extends Error {
	constructor(message: string, status: number) {
		super();
		this.message = message;
		this.status = status;
	}
	message: string;
	status: number;
}
