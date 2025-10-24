import styles from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import AddNewTodoInput from '../Inputs/AddNewTodoInput';
const AddTasks = () => {
	// State for make addTask input visible
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');

	// Show the form when click

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
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<AddNewTodoInput
					task={task}
					setTask={setTask}
					handleAddTodo={handleAddTodo}
				/>

				{/* <div className='todo-input'>
					<input
						type='text'
						placeholder='Add a new task'
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<button onClick={handleAddTodo}>Add</button>
				</div> */}
				<ul className='todo-list'>
					{todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => handleRemoveTodo(index)}>Remove</button>
						</li>
					))}
				</ul>
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
