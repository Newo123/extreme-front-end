import { FC } from 'react';
import { ReactComponent as SearchIcon } from '../../images/Search.svg';
import styles from './Search.module.scss';

export const Search: FC = () => {
	return (
		<div className={styles.search}>
			<SearchIcon className={styles.search__icon} />
			<input type='text' placeholder='Поиск' className={styles.search__input} />
			<button className={styles.search__button}>Поиск</button>
		</div>
	);
};
