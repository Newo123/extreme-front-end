import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './global.css';
import ThemeProvider from './providers/ThemeProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<Root />
		</ThemeProvider>
	</React.StrictMode>,
);
