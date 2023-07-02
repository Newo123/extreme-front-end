import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AppError } from '../../../common/errors';
import { setError } from '../../../store/slice/auth';
import { registerUser } from '../../../store/thunk/auth';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { RegisterSchema } from '../../../utils/yup';
import styles from './Register.module.scss';

export const RegisterPage: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isLoading, error } = useAppSelector(state => state.auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(RegisterSchema),
	});
	const onSubmit = handleSubmit(async (data, e) => {
		e?.preventDefault();
		try {
			if (data.password === data.confirm_password) {
				const newUser = {
					full_name: data.full_name,
					nick_name: data.nick_name,
					email: data.email,
					phone: data.phone,
					password: data.password,
				};
				const response = await dispatch(registerUser(newUser));
				if (response.meta.requestStatus === 'fulfilled') {
					navigate('/');
				}
			} else {
				throw new Error(AppError.PasswordDoNotMatch);
			}
		} catch (error: any) {
			dispatch(setError(error.message));
			return error.message;
		}
	});

	return (
		<form
			className={styles.register__form}
			onSubmit={e => onSubmit(e)}
			autoComplete='off'
		>
			<label className={styles.register__label} htmlFor='full_name'>
				<input
					id='full_name'
					className={cn(
						styles.register__input,
						!!errors.full_name && styles.error,
					)}
					type='text'
					placeholder='ФИО*'
					{...register('full_name')}
				/>
				{errors?.full_name && (
					<span className={styles.error__message}>
						{errors.full_name.message}
					</span>
				)}
			</label>
			<label className={styles.register__label} htmlFor='nick_name'>
				<input
					id='nick_name'
					className={cn(
						styles.register__input,
						!!errors.nick_name && styles.error,
					)}
					type='text'
					placeholder='Псевдоним*'
					{...register('nick_name')}
				/>
				{errors?.nick_name && (
					<span className={styles.error__message}>
						{errors.nick_name.message}
					</span>
				)}
				<span
					className={cn(
						styles.register__formDescription,
						!!errors.nick_name && styles.opacity,
					)}
				>
					От 3 до 16 символов,
					<br /> только латинские буквы, цифры и дефис
				</span>
			</label>
			<label className={styles.register__label} htmlFor='email'>
				<input
					id='email'
					className={cn(styles.register__input, !!errors.email && styles.error)}
					type='email'
					placeholder='Email*'
					{...register('email')}
				/>
				{(errors?.email && (
					<span className={styles.error__message}>{errors.email.message}</span>
				)) ||
				(error &&
					error ===
						'Пользователь с таким адресом электронной почты уже существует') ? (
					<span className={styles.error__message}>{error}</span>
				) : null}
			</label>
			<label className={styles.register__label} htmlFor='phone'>
				<input
					id='phone'
					className={cn(styles.register__input, !!errors.phone && styles.error)}
					type='phone'
					placeholder='Телефон*'
					{...register('phone')}
				/>
				{errors?.phone && (
					<span className={styles.error__message}>{errors.phone.message}</span>
				)}
			</label>
			<label className={styles.register__label} htmlFor='password'>
				<input
					id='password'
					className={cn(
						styles.register__input,
						!!errors.password && styles.error,
					)}
					type='password'
					placeholder='Пароль*'
					{...register('password')}
				/>
				{(errors?.password && (
					<span className={styles.error__message}>
						{errors.password.message}
					</span>
				)) ||
				(error && error === 'Поле пароль не совпадает') ? (
					<span className={styles.error__message}>{error}</span>
				) : null}
			</label>
			<label className={styles.register__label} htmlFor='confirm_password'>
				<input
					id='confirm_password'
					className={cn(
						styles.register__input,
						!!errors.confirm_password && styles.error,
					)}
					type='password'
					placeholder='Повторите пароль*'
					{...register('confirm_password')}
				/>
				{(errors?.confirm_password && (
					<span className={styles.error__message}>
						{errors.confirm_password.message}
					</span>
				)) ||
				(error && error === 'Поле пароль не совпадает') ? (
					<span className={styles.error__message}>{error}</span>
				) : null}
			</label>
			<button className={styles.register__submit} type='submit'>
				Зарегистрироваться
			</button>
			<div className={styles.register__policy}>
				Нажимая «Зарегистрироваться», Вы принимаете условия <br />
				<a href='#'>пользовательского соглашения</a>
			</div>
		</form>
	);
};
