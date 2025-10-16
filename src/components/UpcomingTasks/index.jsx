import React, { useState, useEffect } from 'react';
// import { useEffect } from "react";
import styles from './index.module.scss';
import arrowUp from '../images/arrow.png';
// import UpcomingTasksList from '../UpcomingTasksList';
// import TestTodoComponent from '../TestTodoComponent';

const UpcomingTasks = ({ handleRemoveTodo }) => {
	const [todos, setTodos] = useState([]);

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
			{/* <TestTodoComponent /> */}
			<div className={styles.tasksContainer}>
				<ul className='todo-list'>
					{todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => handleRemoveTodo(index)}>Remove</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default UpcomingTasks;
