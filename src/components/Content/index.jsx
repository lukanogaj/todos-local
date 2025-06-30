import { useState } from "react";
import styles from "./index.module.scss";
import Header from "../Header";
import Action from "../Action";
import UpcomingTasks from "../UpcomingTasks";

const Content = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (task.trim() !== "") {
			setTodos([...todos, task]);
			setTask("");
		}
	};
	return (
		<div className={styles.content}>
			<Header />
			<Action />
			<UpcomingTasks
				handleAddTodo={handleAddTodo}
				todos={todos}
				task={task}
			/>
		</div>
	);
};

export default Content;
