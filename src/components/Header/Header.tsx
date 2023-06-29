import { FC } from 'react';
import { Navigate } from '../Navigate/Navigate';
import { Search } from '../Search/Search';
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';
import styles from './Header.module.scss';

export const Header: FC = () => {
	const isAuth = false;

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__left}>
					<a href='/'></a>
					<Search />
				</div>
				<div className={styles.header__right}>
					<ToggleTheme />
					{isAuth ? (
						<Navigate />
					) : (
						<button className={styles.header__authButton}>Войти</button>
					)}
				</div>
			</div>
		</header>
	);
};
