import styles from './index.module.scss';
import { useState, useRef } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import { v4 as uuidv4 } from 'uuid';
import AddTaskInput from '../inputs/AddTaskInput';

const AddTasks = () => {
	const [task, setTasks] = useState(false);
	const [todos, setTodos] = useState([]);
	// State for make addTask input visible
	const [isFormVisible, setIsFormVisible] = useState(false);
	// State for form data and create the object with the data for task
	const [formData, setFormData] = useState('');
	const [name, setName] = useState([]);

	const handleChange = (e) => {
		console.log(e.target.value);
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				{/* <span onClick={setTasks}>{task ? <AddNewTaskHandler /> : null}+</span> */}
				<button
					onClick={() => setIsFormVisible(!isFormVisible)}
					className={styles.btnAddTask}>
					{isFormVisible ? 'Hide Form 𝗫' : 'Add New Task ✚'}
				</button>
				{isFormVisible && (
					<AddTaskInput
						name={name}
						onChange={handleChange}
					/>
				)}
				{/* <AddTaskInput /> */}

				{/* <AddNewTaskHandler /> */}
				<div className={styles.taskHead}>
					<h2>Add a new task </h2>
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

// const addTodo = (todo) => {
// 	setTodos([
// 		...todos,
// 		{ id: uuidv4(), task: todo, completed: false, isEditing: false },
// 	]);
// };

// const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

// const toggleComplete = (id) => {
// 	setTodos(
// 		todos.map((todo) =>
// 			todo.id === id ? { ...todo, completed: !todo.completed } : todo
// 		)
// 	);
// };

// const editTodo = (id) => {
// 	setTodos(
// 		todos.map((todo) =>
// 			todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
// 		)
// 	);
// };

// const editTask = (task, id) => {
// 	setTodos(
// 		todos.map((todo) =>
// 			todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
// 		)
// 	);
// };
