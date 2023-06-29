import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../../components/Layout/Layout';
import styles from './Register.module.scss';

export const RegisterPage: FC = () => {
	return (
		<Layout>
			<div className={styles.register}>
				<div className={styles.register__socials}>
					<h1 className={styles.register__title}>Регистрация</h1>
					<p className={styles.register__description}>
						Быстрая регистрация через соцсеть
					</p>
					<ul className={styles.register__icons}>
						<a className={styles.vk} href='#'></a>
						<a className={styles.facebook} href='#'></a>
						<a className={styles.yandex} href='#'></a>
						<a className={styles.google} href='#'></a>
					</ul>
				</div>
				<form className={styles.register__form}>
					<input
						className={styles.register__input}
						type='text'
						placeholder='ФИО*'
					/>
					<label className={styles.register__label} htmlFor='nick'>
						<input
							id='nick'
							className={styles.register__input}
							type='text'
							placeholder='Псевдоним*'
						/>
						<span className={styles.register__formDescription}>
							От 3 до 16 символов,
							<br /> только латинские буквы, цифры и дефис
						</span>
					</label>
					<input
						className={styles.register__input}
						type='email'
						placeholder='Email*'
					/>
					<input
						className={styles.register__input}
						type='phone'
						placeholder='Телефон*'
					/>
					<input
						className={styles.register__input}
						type='password'
						placeholder='Пароль*'
					/>
					<input
						className={styles.register__input}
						type='password'
						placeholder='Повторите пароль*'
					/>
					<button className={styles.register__submit} type='submit'>
						Зарегистрироваться
					</button>
					<div className={styles.register__policy}>
						Нажимая «Зарегистрироваться», Вы принимаете условия <br />
						<a href='#'>пользовательского соглашения</a>
					</div>
				</form>
				<div className={styles.register__toLogin}>
					<p>Уже зарегистрированы?</p>
					<Link to='/login'>Войти</Link>
				</div>
			</div>
		</Layout>
	);
};
