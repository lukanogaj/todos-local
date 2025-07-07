import styles from "./index.module.scss";
import { useState, useEffect, useRef } from "react";

const AddNewTaskHandler = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("");

	// Use Effect to storage items in the local storage
	useEffect(() => {
		const savedTodoData = localStorage.getItem("todo-data");

		if (savedTodoData) {
			setData(JSON.parse(savedTodoData));
		} else {
			localStorage.setItem("todo-data", JSON.stringify([]));
		}
	}, []);

	// Add new todo into local storage onClick
	const addNewTodo = () => {
		const newTodo = { text: input, complete: false };
		const updatedTodoList = [...data, newTodo];
		setData(updatedTodoList);
		localStorage.setItem("todo-data", JSON.stringify(updatedTodoList));
		setInput("");
	};

	// Complete todo click
	const completeTodo = (index) => {
		const updatedList = [...data];
		updatedList[index].complete = !updatedList[index].complete;
		setData(updatedList);
		localStorage.setItem("todo-data", JSON.stringify(updatedList));
	};

	// Delete and remove to-do from the local storage
	const deleteTodo = (index) => {
		const updatedData = [...data];
		updatedData.splice(index, 1);
		setData(updatedData);
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
							{data.map((todo, index) => (
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
