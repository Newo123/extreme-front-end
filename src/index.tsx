import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import './global.css';
import ThemeProvider from './providers/ThemeProvider';
import store from './store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<BrowserRouter>
					<Root />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
