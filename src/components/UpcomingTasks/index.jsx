import { useState } from "react";
import { useEffect } from "react";
import styles from "./index.module.scss";

const UpcomingTasks = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	// Load TODOs from local storage on app startup
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	// Update local storage whenever TODOs change
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleAddTodo = () => {
		if (task.trim() !== "") {
			setTodos([...todos, task]);
			setTask("");
		}
	};

	const handleRemoveTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};
	return (
		<div className={styles.upcomingTasks}>
			<header className={styles.upcomingTasksHeader}>
				<h1>Upcoming Tasks</h1>
			</header>
			<div className={styles.tasksContainer}>
				<div className="todoInput">
					<input
						type="text"
						placeholder="Add a new task"
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<button onClick={handleAddTodo}>Add</button>
				</div>
				<ul className="todoList">
					{todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => handleRemoveTodo(index)}>Remove</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default UpcomingTasks;
