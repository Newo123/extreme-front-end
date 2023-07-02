import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../store/thunk/auth';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { LoginSchema } from '../../../utils/yup';
import styles from './Login.module.scss';

export const LoginPage: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isLoading, error } = useAppSelector(state => state.auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(LoginSchema),
	});
	const onSubmit = async (data: any) => {
		try {
			const response = await dispatch(loginUser(data));
			if (response.meta.requestStatus === 'fulfilled') {
				navigate('/');
			}
		} catch (error: any) {
			if (error instanceof Error) {
				return error.message;
			}
		}
	};

	return (
		<form
			className={styles.login__form}
			onSubmit={handleSubmit(onSubmit)}
			autoComplete='off'
		>
			<label className={styles.login__label} htmlFor='email'>
				<input
					id='email'
					className={cn(styles.login__input, !!errors.email && styles.error)}
					type='email'
					placeholder='Email*'
					{...register('email')}
				/>
				{(errors?.email && (
					<span className={styles.error__message}>{errors.email.message}</span>
				)) ||
					(error &&
					error === 'Пользователь с таким электронным адресом не существует' ? (
						<span className={styles.error__message}>{error}</span>
					) : null)}
			</label>
			<label className={styles.login__label} htmlFor='password'>
				<input
					id='password'
					className={cn(styles.login__input, !!errors.password && styles.error)}
					type='password'
					placeholder='Пароль*'
					{...register('password')}
				/>
				{}
				{(errors?.password && (
					<span className={styles.error__message}>
						{errors.password.message}
					</span>
				)) ||
					(error === 'Некорректный пароль' ? (
						<span className={styles.error__message}>{error}</span>
					) : null)}
			</label>
			<Link className={styles.login__forgotPassword} to='/password-recovery'>
				Забыли пароль?
			</Link>
			<button className={styles.login__submit} type='submit'>
				Войти
			</button>
			<div className={styles.login__policy}>
				Нажимая «Войти», Вы принимаете условия <br />
				<a href='#'>пользовательского соглашения</a>
			</div>
		</form>
	);
};
