import cn from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';

interface Props {
	children: ReactNode;
	className?: string;
}

export const Layout: FC<Props> = ({ children, className }) => {
	return <div className={cn(styles.layout, className)}>{children}</div>;
};
