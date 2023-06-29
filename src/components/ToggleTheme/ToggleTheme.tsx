import cn from 'classnames';
import { FC } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ReactComponent as ThemeDark } from '../../images/darkTheme.svg';
import { ReactComponent as ThemeLight } from '../../images/lightTheme.svg';
import styles from './ToggleTheme.module.scss';

interface Props {
	theme: string;
	onChange: (theme: string) => void;
}

const Toggle = ({ theme, onChange }: Props) => {
	console.log(theme);
	return (
		<div className={styles.toggle}>
			<button
				className={cn(
					styles.toggle__button,
					theme === 'dark' && styles.toggle__buttonActive,
				)}
				onClick={() => onChange('dark')}
			>
				<ThemeDark />
			</button>
			<button
				className={cn(
					styles.toggle__button,
					theme === 'light' && styles.toggle__buttonActive,
				)}
				onClick={() => onChange('light')}
			>
				<ThemeLight />
			</button>
		</div>
	);
};

export const ToggleTheme: FC = () => {
	return (
		<ThemeContext.Consumer>
			{({ theme, setTheme }: any) => {
				return <Toggle theme={theme} onChange={setTheme} />;
			}}
		</ThemeContext.Consumer>
	);
};
