import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import arrowUp from '../images/arrow.png';
// import FetchTodos from '../hooks';

const UpcomingTasks = ({ todos, addedTodo, setTodos }) => {
	// Load TODOs from local storage on app startup
	// Load TODOs from local storage on app startup
	// Load TODOs from local storage on app startup
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	return (
		<div className={styles.upcomingTasks}>
			<div className={styles.upcomingTasksHeader}>
				<h1 className={styles.headerH1}>Upcoming Tasks</h1>
				<div className={styles.arrow}>
					<span className={styles.spanArrow}>See all</span>
					<img
						src={arrowUp}
						alt=''
					/>
				</div>
			</div>
			{/* Upcoming Todos items  */}
			<div className={styles.upcomingTasksContainer}>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default UpcomingTasks;
