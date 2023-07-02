import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from '../Navigate/Navigate';
import { Search } from '../Search/Search';
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';
import styles from './Header.module.scss';

export const Header: FC = () => {
	const isAuth = false;
	const navigate = useNavigate();

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
						<button
							onClick={() => navigate('/login')}
							className={styles.header__authButton}
						>
							Войти
						</button>
					)}
				</div>
			</div>
		</header>
	);
};
