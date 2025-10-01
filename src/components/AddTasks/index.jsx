import styles from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import { v4 as uuidv4 } from 'uuid';
import AddTaskInput from '../inputs/AddTaskInput';

const AddTasks = () => {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);
	// State for make addTask input visible
	const [isFormVisible, setIsFormVisible] = useState(false);
	// Restore item from local storage

	useEffect(() => {
		if (localStorage.getItem('localTasks')) {
			const storedList = JSON.parse(localStorage.getItem('localTasks'));
			setTasks(storedList);
		}
	});

	// Add task to local storage
	const addTask = () => {
		if (task) {
			const newTask = { id: new Date().getTime().toString(), title: task };
			setTasks([...tasks, newTask]);
			localStorage.setItem('localTasks', JSON.stringify([...tasks, newTask]));
			setTask('');
			console.log(newTask);
		}
	};

	const handleDelete = () => {
		const deleted = tasks.filter((t) => t.id !== task.id);
		setTasks(deleted);
		localStorage.setItem('localTasks', JSON.stringify(deleted));
	};
	// Just for purpose removing tasks from local storage
	const handleClear = () => {
		setTasks([]);
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
						tasks={tasks}
						task={task}
						setTask={setTask}
						// setNotes={setNotes}
					/>
				)}
				{/* <AddTaskInput /> */}

				{/* <AddNewTaskHandler /> */}
				<div className={styles.addTaskBtn}>
					<button
						onClick={addTask}
						className={styles.btnAddToDo}>
						+
					</button>
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
