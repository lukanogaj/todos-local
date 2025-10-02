import styles from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import { v4 as uuidv4 } from 'uuid';
import AddTaskInput from '../inputs/AddTaskInput';

const AddTasks = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');
	// State for make addTask input visible
	const [isFormVisible, setIsFormVisible] = useState(false);

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

	// FUnction to ad todos into local storage onCLick

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
	// Just for purpose removing tasks from local storage
	const handleClear = () => {
		setTask([]);
		localStorage.removeItem('localTasks');
	};

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				{/* <span onClick={setTasks}>{task ? <AddNewTaskHandler /> : null}+</span> */}
				<button
					onClick={() => setIsFormVisible(!isFormVisible)}
					className={styles.btnAddTask}>
					{isFormVisible ? 'Hide Form 𝗫' : 'Add New Task '}
				</button>
				{isFormVisible && (
					<AddTaskInput
						// tasks={tasks}
						task={task}
						setTask={setTask}
						// setNotes={setNotes}
					/>
				)}
				{/* <AddTaskInput /> */}

				{/* <AddNewTaskHandler /> */}
				<div className={styles.addTaskBtn}>
					<button
						onClick={handleAddTodo}
						className={styles.btnAddToDo}>
						+
					</button>
					<ul className={styles.todoList}>
						{todos.map((todo, index) => (
							<li key={index}>
								{todo}
								<button onClick={() => handleRemoveTodo(index)}>Remove</button>
							</li>
						))}
					</ul>
					<h2>Add New Task</h2>
					<button
						onClick={handleClear}
						className={styles.btnRemoveTask}>
						❌
					</button>
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

// Create the useState and useEffect to store tasks in local storage
////////////////////////////////////////////////////////////

// ///////////////////////////////////////

// const handleChange = (e) => {
// 	console.log(e.target.value);
// 	setTasks({
// 		...tasks,
// 		[e.target]: e.target.value,
// 	});
// };
