import { FC } from 'react';
import { Navigate } from '../Navigate/Navigate';
import { Search } from '../Search/Search';
import { ToggleTheme } from '../ToggleTheme/ToggleTheme';
import styles from './Header.module.scss';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles.header__left}>
					<a href='/'></a>
					<Search />
				</div>
				<div>
					<ToggleTheme />
					<Navigate />
				</div>
			</div>
		</header>
	);
};
