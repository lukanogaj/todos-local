import styles from "./index.module.scss";
import { useState, useEffect, useRef } from "react";

const AddNewTaskHandler = () => {
	const [dataValue, setDataValue] = useState([]);
	const [input, setInput] = useState("");

	// Use Effect to storage items in the local storage
	useEffect(() => {
		const savedTodoData = localStorage.getItem("todo-data");

		if (savedTodoData) {
			setDataValue(JSON.parse(savedTodoData));
		} else {
			localStorage.setItem("todo-data", JSON.stringify([]));
		}
	}, []);

	// Add new todo into local storage onClick
	const addNewTodo = () => {
		const newTodo = { text: input, complete: false };
		const updatedTodoList = [...dataValue, newTodo];
		setDataValue(updatedTodoList);
		localStorage.setItem("todo-data", JSON.stringify(updatedTodoList));
		setInput("");
	};

	// Complete todo click
	const completeTodo = (index) => {
		const updatedList = [...dataValue];
		updatedList[index].complete = !updatedList[index].complete;
		setDataValue(updatedList);
		localStorage.setItem("todo-data", JSON.stringify(updatedList));
	};

	// Delete and remove to-do from the local storage
	const deleteTodo = (index) => {
		const updatedData = [...dataValue];
		updatedData.splice(index, 1);
		setDataValue(updatedData);
		localStorage.setItem("todo-data", JSON.stringify(updatedData));
	};
	return (
		<div className={styles.tasksContainer}>
			<div className={styles.todoInput}>
				<input
					value={input}
					type="text"
					placeholder="Add a new task"
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						addNewTodo();
					}}>
					Add
				</button>
				<div>
					<div>
						<ol>
							{dataValue.map((todo, index) => (
								<div
									key={index}
									style={{ display: "flex" }}>
									<p>{todo.text}</p>
									<button
										onClick={() => {
											deleteTodo(index);
										}}>
										🗑️
									</button>
									<button
										onClick={() => completeTodo(index)}
										key={index}>
										{todo.complete ? "✅" : "🟥"}
									</button>
								</div>
							))}
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddNewTaskHandler;
