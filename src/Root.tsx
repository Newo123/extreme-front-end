import { Route, Routes } from 'react-router-dom';
import { Header, HeaderMobile } from './components';
import { AuthRootPage } from './pages';

const Root = () => {
	return (
		<>
			<HeaderMobile />
			<Header />
			<Routes>
				<Route path='/' element={<AuthRootPage />} />
				<Route path='/login' element={<AuthRootPage />} />
				<Route path='/register' element={<AuthRootPage />} />
			</Routes>
		</>
	);
};

export default Root;
