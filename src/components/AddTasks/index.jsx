import styles from './index.module.scss';
import { useState, useRef } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import { v4 as uuidv4 } from 'uuid';

const AddTasks = () => {
	const [task, setTasks] = useState(false);
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), task: todo, completed: false, isEditing: false },
		]);
	};

	const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

	const editTask = (task, id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
			)
		);
	};

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<h1>
					{/* <span onClick={setTasks}>{task ? <AddNewTaskHandler /> : null}+</span> */}
					<span>+</span>
				</h1>
				{/* <AddNewTaskHandler /> */}
				<div className={styles.taskHead}>
					<h2>Add a new task</h2>
				</div>
			</div>
			<div className={styles.greeting}>
				<div className={styles.awesomeImg}>
					<img
						src={youAreAwesome}
						alt=''
					/>
				</div>

				<h2>
					You're Doing <br />
					<strong>Awesome!</strong>
				</h2>
			</div>
		</div>
	);
};

export default AddTasks;
