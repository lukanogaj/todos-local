import styles from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
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
	// Create the useState and useEffect to store tasks in local storage
	const [notes, setNotes] = useState(() => {
		const notes = JSON.parse(localStorage.getItem('notes'));
		return notes || [];
	});

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

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
					{isFormVisible ? 'Hide Form 𝗫' : 'Add New Task '}
				</button>
				{isFormVisible && (
					<AddTaskInput
						name={name}
						onChange={handleChange}
						notes={notes}
						setNotes={setNotes}
					/>
				)}
				{/* <AddTaskInput /> */}

				{/* <AddNewTaskHandler /> */}
				<div className={styles.addTaskBtn}>
					<button className={styles.btnAddToDo}>➕</button>
					<h2>Add New Task</h2>
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
