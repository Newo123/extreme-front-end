import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import styles from './Auth.module.scss';
import { LoginPage } from './LoginPage/LoginPage';
import { RecoveryPassword } from './RecoveryPassword/RecoveryPassword';
import { RegisterPage } from './RegisterPage/RegisterPage';

export const AuthRootPage: FC = () => {
	const location = useLocation();
	return (
		<Layout className={styles.auth}>
			<div
				className={
					location.pathname === '/login'
						? styles.auth__loginSocials
						: location.pathname === '/register'
						? styles.auth__registerSocials
						: styles.auth__recoverySocials
				}
			>
				<h1 className={styles.auth__title}>
					{location.pathname === '/login'
						? 'Вход'
						: location.pathname === '/register'
						? 'Регистрация'
						: 'Восстановление пароля'}
				</h1>
				<p className={styles.auth__description}>
					{location.pathname === '/login'
						? 'Быстрый вход через соцсеть'
						: location.pathname === '/register'
						? 'Быстрая регистрация через соцсеть'
						: 'Быстрый вход через соцсеть'}
				</p>
				<ul className={styles.auth__icons}>
					<a className={styles.vk} href='#'></a>
					<a className={styles.facebook} href='#'></a>
					<a className={styles.yandex} href='#'></a>
					<a className={styles.google} href='#'></a>
				</ul>
			</div>
			{location.pathname === '/login' ? (
				<LoginPage />
			) : location.pathname === '/register' ? (
				<RegisterPage />
			) : location.pathname === '/password-recovery' ? (
				<RecoveryPassword />
			) : null}
			{location.pathname === '/login' ? (
				<div className={styles.auth__toRegister}>
					<p>Ещё не зарегистрированы?</p>
					<Link to='/register'>Зарегистрироваться</Link>
				</div>
			) : location.pathname === '/register' ? (
				<div className={styles.auth__toLogin}>
					<p>Уже зарегистрированы?</p>
					<Link to='/login'>Войти</Link>
				</div>
			) : null}
		</Layout>
	);
};
