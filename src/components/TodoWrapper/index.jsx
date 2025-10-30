import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import data from "../data";
import arrowUp from "../images/icons/arrow-up.svg";
import ProgressBar from "../ProgressBar";
import AddTasks from "../AddTasks";
import UpcomingTasks from "../UpcomingTasks";
import CheckBoxToday from "../Inputs/Controls/CheckboxToday";

// Div that include 4 divs (Todays tasks list, todays task with information how many tasks has been done , add new task div, and greeting of support)
const TodoWrapper = () => {
	const [upcomingTodos, setUpcomingTodos] = useState([]);
	const [newPriority, setNewPriority] = useState("Normal");
	const [newDueDate, setNewDueDate] = useState("");
	const [newTask, setNewTask] = useState("");
	// const [searchTerm, setSearchTerm] = useState("");

	// Add Todo
	const handleAddTodo = (newTask) => {
		if (newTask.trim() !== "") {
			localStorage.setItem(
				"todos",
				JSON.stringify([...upcomingTodos, newTask])
			);
			setUpcomingTodos([...upcomingTodos, newTask]);
		}
	};

	///
	// const addTodo = (task, priority, dueDate) => {
	// 	if (task.trim() !== "") {
	// 		setUpcomingTodos([
	// 			...upcomingTodos,
	// 			{ id: Date.now(), task, completed: false, priority, dueDate },
	// 		]);
	// 		setNewTask("");
	// 		setNewPriority("Normal");
	// 		setNewDueDate("");
	// 	}
	// };

	const handleRemoveTodo = (index) => {
		// remove should be in upcoming tasks
		const newTodos = upcomingTodos.filter((_, i) => i !== index);
		localStorage.setItem("todos", JSON.stringify(newTodos));
		setUpcomingTodos(newTodos);
	};

	// const handleAddClick = () => {
	// 	addTodo(newTask, newPriority, newDueDate);
	// };
	// Dealing with the undefined JSON and get the todos from local storage
	useEffect(() => {
		function safeJSON(todos, fallback = null) {
			try {
				const storedTodos = localStorage.getItem(todos);
				return storedTodos ? JSON.parse(storedTodos) : fallback;
			} catch {
				localStorage.removeItem(todos);
			}
			return fallback;
		}
		safeJSON();
		// const storedTodos = JSON.parse(localStorage.getItem("todos") || "{}");
		// if (storedTodos) {
		// 	setUpcomingTodos(storedTodos);
		// }
	}, [upcomingTodos.length]);

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
								<CheckBoxToday />
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
				<AddTasks handleAddTodo={handleAddTodo} />
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
