import styles from "./index.module.scss";
import { useState, useRef } from "react";
import AddNewTaskHandler from "../AddNewTaskHandler";
import youAreAwesome from "../images/youarewesome.png";

const AddTasks = () => {
	const [task, setTasks] = useState(false);

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<h1>
					<span onClick={setTasks}>{task ? <AddNewTaskHandler /> : ""}+</span>
				</h1>
				{/* <AddNewTaskHandler /> */}
				<div className={styles.taskHead}>
					<h2>Add a new task</h2>
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
