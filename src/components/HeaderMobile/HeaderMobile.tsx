import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import { ReactComponent as SearchIcon } from '../../images/Search.svg';
import { ReactComponent as NotifyIcon } from '../../images/bell.svg';
import { ReactComponent as ChatIcon } from '../../images/chat.svg';
import { ReactComponent as SettingsIcon } from '../../images/settings.svg';
import styles from './HeaderMobile.module.scss';

export const HeaderMobile: FC = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<a href='/'></a>
			<div className={styles.header__buttons}>
				<button className={styles.header__button}>
					<ChatIcon />
				</button>
				<button className={styles.header__button}>
					<NotifyIcon />
				</button>
				<button className={styles.header__button}>
					<SettingsIcon />
				</button>
				<button className={styles.header__button}>
					<SearchIcon />
				</button>
				<button className={styles.header__button} onClick={() => {}}>
					<MenuIcon />
				</button>
			</div>
		</header>
	);
};
