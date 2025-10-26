import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import data from '../data';
import { v4 as uuidv4 } from 'uuid';
import arrowUp from '../images/icons/arrow-up.svg';
import ProgressBar from '../ProgressBar';
import AddTasks from '../AddTasks';
import UpcomingTasks from '../UpcomingTasks';
import TodayTaskInput from '../Inputs/TodayTaskInput';

// Div that include 4 divs (Todays tasks list, todays task with information how many tasks has been done , add new task div, and greeting of support)
const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');
	const [upcomingTodos, setUpcomingTodos] = useState([]);

	const handleAddTodo = (newTask) => {
		if (newTask.trim() !== '') {
			localStorage.setItem(
				'todos',
				JSON.stringify([...upcomingTodos, newTask])
			);
			setTodos([...todos, newTask]);
		}
	};

	const handleRemoveTodo = (index) => {
		// remove should be in upcoming tasks
		const newTodos = todos.filter((_, i) => i !== index);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		if (storedTodos) {
			setUpcomingTodos(storedTodos);
		}
	}, [todos.length, upcomingTodos.length]);

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
				<AddTasks
					handleAddTodo={handleAddTodo}
					handleRemoveTodo={handleRemoveTodo}
					todos={todos}
					setTodos={setTodos}
					setTask={setTask}
					task={task}
				/>
			</div>
			{/* <AddTasks /> */}
			<UpcomingTasks
				upcomingTodos={upcomingTodos}
				handleRemoveTodo={handleRemoveTodo}
			/>
		</div>
	);
};

export default TodoWrapper;
