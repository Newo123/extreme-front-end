import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FC } from 'react';
import { ReactComponent as NotifyIcon } from '../../images/bell.svg';
import { ReactComponent as ChatIcon } from '../../images/chat.svg';
import { ReactComponent as SettingsIcon } from '../../images/settings.svg';
import styles from './Navigate.module.scss';

export const Navigate: FC = () => {
	return (
		<div className={styles.navigate}>
			<button className={styles.navigate__button}>
				<ChatIcon className={styles.chat} />
			</button>
			<button className={styles.navigate__button}>
				<AccountCircleIcon className={styles.profile} />
			</button>
			<button className={styles.navigate__button}>
				<NotifyIcon />
			</button>
			<button className={styles.navigate__button}>
				<SettingsIcon />
			</button>
		</div>
	);
};
