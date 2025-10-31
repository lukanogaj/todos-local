import styles from "./index.module.scss";
import { useState } from "react";

import youAreAwesome from "../images/youarewesome.png";
import AddNewTodoInput from "../Inputs/AddNewTodoInput";
const AddTasks = ({
	handleAddTodoCopy,
	handleRemoveTodo,
	setTodos,
	setTask,
	todos,
	task,
	date,
	setDate,
}) => {
	// State for make addTask input visible
	const [addedTodo, setAddedTodo] = useState(false);

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<AddNewTodoInput
					task={task}
					setTask={setTask}
					handleAddTodo={handleAddTodoCopy}
					todos={todos}
					addedTodo={addedTodo}
					setAddedTodo={setAddedTodo}
					date={date}
					setDate={setDate}
				/>
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
