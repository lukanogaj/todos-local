import { useState, useEffect } from 'react';
import styles from './index.module.scss';

const UpcomingTasksList = ({ todo, index }) => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');

	const handleRemoveTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);
	return (
		<div className={styles.UpcomingTasksListContainer}>
			<ul className={styles.todoList}>
				<li key={index}>
					{todo}
					<button onClick={() => handleRemoveTodo(index)}>Remove</button>
				</li>
			</ul>
		</div>
	);
};

export default UpcomingTasksList;
