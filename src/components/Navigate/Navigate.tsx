import { IconButton } from '@mui/material';
import { FC } from 'react';
import { ReactComponent as NotifyIcon } from '../../images/bell.svg';
import { ReactComponent as ChatIcon } from '../../images/chat.svg';
import { ReactComponent as ProfileIcon } from '../../images/prifileHeader.svg';
import { ReactComponent as SettingsIcon } from '../../images/settings.svg';

export const Navigate: FC = () => {
	return (
		<div>
			<IconButton>
				<ChatIcon />
			</IconButton>
			<IconButton>
				<ProfileIcon />
			</IconButton>
			<IconButton>
				<NotifyIcon />
			</IconButton>
			<IconButton>
				<SettingsIcon />
			</IconButton>
		</div>
	);
};
