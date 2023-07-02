import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { recoveryPassword } from '../../../store/thunk/auth';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { RecoveryPasswordSchema } from '../../../utils/yup';
import styles from './RecoveryPassword.module.scss';

export const RecoveryPassword: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isLoading, error } = useAppSelector(state => state.auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		mode: 'onSubmit',
		resolver: yupResolver(RecoveryPasswordSchema),
	});

	const onSubmit = async (data: any) => {
		try {
			const response = await dispatch(recoveryPassword(data));

			if (response.meta.requestStatus === 'fulfilled') {
				console.log('Success!');
				// navigate('/');
			}
		} catch (error: any) {
			if (error instanceof Error) {
				return error.message;
			}
		}
	};

	return (
		<form
			className={styles.recovery__form}
			onSubmit={handleSubmit(onSubmit)}
			autoComplete='off'
		>
			<label className={styles.recovery__label} htmlFor='email'>
				<input
					className={cn(styles.recovery__input, !!errors.email && styles.error)}
					id='email'
					type='email'
					{...register('email')}
				/>
				{(errors?.email && (
					<span className={styles.error__message}>{errors.email.message}</span>
				)) ||
					(error &&
					error === 'Пользователь с таким электронным адресом не существует' ? (
						<span className={styles.error__message}>{error}</span>
					) : null)}
				<span
					className={cn(
						styles.recovery__formDescription,
						!!errors.email && styles.opacity,
					)}
				>
					Мы отправим письмо с ссылкой
					<br /> для восстановления пароля
				</span>
			</label>
			<button type='submit' className={styles.recovery__submit}>
				Восстановить пароль
			</button>
			<div className={styles.recovery__policy}>
				Нажимая «Восстановить пароль», Вы принимаете
				<br />
				<span>условия </span>
				<a href='#'>пользовательского соглашения</a>
			</div>
		</form>
	);
};
