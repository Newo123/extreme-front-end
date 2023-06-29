import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterPage } from './RegisterPage/RegisterPage';

export const AuthRootPage: FC = () => {
	const location = useLocation();

	return (
		<section>
			{location.pathname === '/login' ? (
				<LoginPage />
			) : location.pathname === '/register' ? (
				<RegisterPage />
			) : null}
		</section>
	);
};
