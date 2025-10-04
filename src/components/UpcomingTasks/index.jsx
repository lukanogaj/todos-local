import React, { useState, useEffect } from 'react';
// import { useEffect } from "react";
import styles from './index.module.scss';
import arrowUp from '../images/arrow.png';
import UpcomingTasksList from '../UpcomingTasksList';

const UpcomingTasks = ({ todos, handleAddTodo }) => {
	const clearLocalStorage = () => {
		localStorage.clear();
	};
	return (
		<div className={styles.upcomingTasks}>
			<div className={styles.upcomingTasksHeader}>
				<h1 className={styles.headerH1}>Upcoming Tasks</h1>
				<div className={styles.todoList}>
					{todos.map((todo) => (
						<UpcomingTasks
							key={todo.id}
							todo={todo}
							handleAddTodo={handleAddTodo}
						/>
					))}
				</div>
				<div className={styles.arrow}>
					<span className={styles.spanArrow}>See all</span>
					<img
						src={arrowUp}
						alt=''
					/>
				</div>
			</div>
			<div className={styles.tasksContainer}>
				<button onClick={clearLocalStorage}>Clear Locale</button>
			</div>
		</div>
	);
};

export default UpcomingTasks;
