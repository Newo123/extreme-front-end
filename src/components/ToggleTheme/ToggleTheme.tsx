import { IconButton } from '@mui/material';
import { FC } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ReactComponent as ThemeDark } from '../../images/darkTheme.svg';
import { ReactComponent as ThemeLight } from '../../images/lightTheme.svg';

interface Props {
	onChange: (theme: string) => void;
}

const Toggle = ({ onChange }: Props) => (
	<div>
		<IconButton onClick={() => onChange('dark')}>
			<ThemeDark />
		</IconButton>
		<IconButton onClick={() => onChange('light')}>
			<ThemeLight />
		</IconButton>
	</div>
);

export const ToggleTheme: FC = () => {
	return (
		<ThemeContext.Consumer>
			{({ setTheme }: any) => {
				return <Toggle onChange={setTheme} />;
			}}
		</ThemeContext.Consumer>
	);
};
