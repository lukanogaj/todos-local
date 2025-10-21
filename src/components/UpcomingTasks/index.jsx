import React, { useState, useEffect } from 'react';
// import { useEffect } from "react";
import styles from './index.module.scss';
import arrowUp from '../images/arrow.png';
// import UpcomingTasksList from '../UpcomingTasksList';
// import TestTodoComponent from '../TestTodoComponent';

const UpcomingTasks = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');

	// Load TODOs from local storage on app startup
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	// Update local storage whenever TODOs change
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleAddTodo = () => {
		if (task.trim() !== '') {
			setTodos([...todos, task]);
			setTask('');
		}
	};

	const handleRemoveTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};
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
			<div className={styles.tasksContainer}>
				<header className='App-header'>
					<h1>TODO App</h1>
					<div className='todo-input'>
						<input
							type='text'
							placeholder='Add a new task'
							value={task}
							onChange={(e) => setTask(e.target.value)}
						/>
						<button onClick={handleAddTodo}>Add</button>
					</div>
					<ul className='todo-list'>
						{todos.map((todo, index) => (
							<li key={index}>
								{todo}
								<button onClick={() => handleRemoveTodo(index)}>Remove</button>
							</li>
						))}
					</ul>
				</header>
			</div>
		</div>
	);
};

export default UpcomingTasks;
