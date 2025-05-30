import styles from "./index.module.scss";
import { useState } from "react";
// import AddNewTaskHandler from "../AddNewTaskHandler";
import youAreAwesome from "../images/youawesome.png";
import AddNewTaskHandler from "../AddNewTaskHandler";

const AddTasks = () => {
	const [task, setTasks] = useState(false);
	const [newTask, setNewTask] = useState(false);
	const setTask = () => {
		setTasks(!task);
		console.log("Clicked");
	};

	const setNewTasks = () => {
		setNewTask(!newTask);
		console.log("SubmitTasks");
	};
	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<h1 onClick={setNewTasks}>+</h1>
				<AddNewTaskHandler />
				<div className={styles.taskHead}>
					<h2 onClick={setTask}>Add a new task</h2>
				</div>
			</div>
			<div className={styles.greeting}>
				<div className={styles.awesomeImg}>
					<img
						src={youAreAwesome}
						alt=""
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
