import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../../components/Layout/Layout';
import styles from './Login.module.scss';

export const LoginPage: FC = () => {
	return (
		<Layout>
			<div className={styles.login}>
				<div className={styles.login__socials}>
					<h1 className={styles.login__title}>Вход</h1>
					<p className={styles.login__description}>
						Быстрый вход через соцсеть
					</p>
					<ul className={styles.login__icons}>
						<a className={styles.vk} href='#'></a>
						<a className={styles.facebook} href='#'></a>
						<a className={styles.yandex} href='#'></a>
						<a className={styles.google} href='#'></a>
					</ul>
				</div>
				<form className={styles.login__form}>
					<input
						className={styles.login__input}
						type='email'
						placeholder='Email*'
					/>
					<input
						className={styles.login__input}
						type='password'
						placeholder='Пароль*'
					/>
					<a className={styles.login__forgotPassword} href='#'>
						Забыли пароль?
					</a>
					<button className={styles.login__submit} type='submit'>
						Войти
					</button>
					<div className={styles.login__policy}>
						Нажимая «Войти», Вы принимаете условия <br />
						<a href='#'>пользовательского соглашения</a>
					</div>
				</form>
				<div className={styles.login__toRegister}>
					<p>Ещё не зарегистрированы?</p>
					<Link to='/register'>Зарегистрироваться</Link>
				</div>
			</div>
		</Layout>
	);
};
