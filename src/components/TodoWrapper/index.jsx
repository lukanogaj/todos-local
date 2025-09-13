import styles from './index.module.scss';
import { useState } from 'react';
import data from '../data';
import { v4 as uuidv4 } from 'uuid';
import arrowUp from '../images/icons/arrow-up.svg';
import ProgressBar from '../ProgressBar';
import AddTasks from '../AddTasks';
// import ToDoForm from '../TodoForm';
import UpcomingTasks from '../UpcomingTasks';
import TodayTaskInput from '../inputs/TodayTaskInput';

// Div that include 4 divs (Todays tasks list, todays task with information how many tasks has been done , add new task div, and greeting of support)
const TodoWrapper = () => {
	// const today = new Date();
	// console.log(today);
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
		<div className={styles.action}>
			{/* Today's tasks */}
			<div className={styles.taskContainer}>
				<div className={styles.taskTable}>
					<div className={styles.taskHeading}>
						<h2>Today's Tasks</h2>
						<img
							src={arrowUp}
							alt=''
						/>
					</div>
					{data.tasks.map((todoItem) => (
						<div
							key={todoItem.id}
							className={styles.tasks}>
							<div className={styles.taskIcon}>
								<TodayTaskInput />
								{/* <img
									src={todoItem.checkIcon}
									alt='box'
								/> */}
							</div>
							<div
								className={styles.taskText}
								key={todoItem.id}>
								{todoItem.task}
							</div>
						</div>
					))}
				</div>
				<div className={styles.taskCounter}>
					<div className={styles.taskCounterHeading}>
						<h2>Today's Tasks</h2>
						<p>1 out of 4 done</p>
					</div>
					<div className={styles.circularProgressContainer}>
						<ProgressBar />
					</div>
				</div>
			</div>
			{/* Add new task and greeting  */}
			<div className={styles.addTasksContainer}>
				{' '}
				<AddTasks />
			</div>
			{/* <AddTasks /> */}
			<UpcomingTasks data={data} />
		</div>
	);
};

export default TodoWrapper;
