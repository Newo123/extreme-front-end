import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';

interface Props {
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
	return <div className={styles.layout}>{children}</div>;
};
