import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Header from '../Header';
import TodoWrapper from '../TodoWrapper';
// import AddTasks from "../AddTasks";
// import UpcomingTasks from "../UpcomingTasks";

const Content = () => {
	// const [data, setData] = useState([]);
	// const [input, setInput] = useState('');

	return (
		<div className={styles.content}>
			<Header />
			<TodoWrapper />
		</div>
	);
};

export default Content;
