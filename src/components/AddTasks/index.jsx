import styles from "./index.module.scss";
import { useEffect } from "react";
import youAreAwesome from "../images/youarewesome.png";
const AddTasks = ({
	todos,
	title,
	date,
	time,
	setTodos,
	setTitle,
	setDate,
	setTime,
}) => {
	const clearLocale = () => {
		localStorage.clear();
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	function handleAddTodo(e) {
		e.preventDefault();
		if (!title || !date || !time) return;

		setTodos([
			...todos,
			{
				id: Date.now(),
				title,
				date,
				time,
				completed: false,
			},
		]);
		setTitle("");
		setDate(new Date());
		setTime("");
	}

	// function handleDelete(id) {
	// 	setTodos(todos.filter((todo) => todo.id !== id));
	// }

	// // Sort todos by date and time
	// const sortedTodos = [...todos].sort((a, b) => {
	// 	const dtA = new Date(`${a.date}T${a.time}`);
	// 	const dtB = new Date(`${b.date}T${b.time}`);
	// 	return dtA - dtB;
	// });

	return (
		<div className={styles.addTasks}>
			<div
				style={{
					maxWidth: 500,
					margin: "2rem auto",
					fontFamily: "sans-serif",
				}}>
				<h1>Todo List</h1>
				<form
					onSubmit={handleAddTodo}
					style={{ marginBottom: "1rem" }}>
					<input
						type='text'
						placeholder='Todo title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						style={{ marginRight: "0.5rem" }}
						required
					/>
					<input
						type='date'
						value={date}
						onChange={(e) => setDate(e.target.value)}
						style={{ marginRight: "0.5rem" }}
						required
					/>
					<input
						type='time'
						value={time}
						onChange={(e) => setTime(e.target.value)}
						style={{ marginRight: "0.5rem" }}
						required
					/>
					<button type='submit'>Add</button>
				</form>

				<button onClick={() => clearLocale()}></button>
			</div>
			<div className={styles.greeting}>
				<div className={styles.awesomeImg}>
					{" "}
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
// const AddTasks = () => {
// 	// State for make addTask input visible
// 	const [isFormVisible, setIsFormVisible] = useState(false);
// 	const [input, setInput] = useState("");
// 	const clearLocale = () => localStorage.clear();
// 	return (
// 		<div className={styles.addTasks}>
// 			<div className={styles.addTask}>
// 				<>
// 					<div
// 						onClick={() => setIsFormVisible(!isFormVisible)}
// 						className={styles.toggleButton}>
// 						{isFormVisible ? <HideForm /> : <AddNewTaskControl />}
// 					</div>
// 					<div className={styles.todoInput}>
// 						{isFormVisible && (
// 							<div>
// 								<input
// 									type='text'
// 									placeholder='Add a new task'
// 									value={input}
// 									onChange={(e) => console.log(setTitle(e.target.title))}
// 									required
// 								/>
// 								<input
// 									type='date'
// 									value={date}
// 									onChange={(e) => setDate(e.target.value)}
// 									style={{ marginRight: "0.5rem" }}
// 									required
// 								/>
// 								<input
// 									type='time'
// 									value={time}
// 									onChange={(e) => setTime(e.target.value)}
// 									style={{ marginRight: "0.5rem" }}
// 									required
// 								/>
// 								<button
// 									onClick={() => {
// 										handleAddTodo(title);
// 										setInput("");
// 									}}>
// 									Submit
// 								</button>
// 								<button onClick={() => clearLocale()}>Clear</button>
// 							</div>
// 						)}
// 					</div>
// 				</>
// 			</div>
// 			<div className={styles.greeting}>
// 				<div className={styles.awesomeImg}>
// 					<img
// 						src={youAreAwesome}
// 						alt=''
// 					/>
// 				</div>

// 				<h2>
// 					You're Doing <br />
// 					<strong>Awesome!</strong>
// 				</h2>
// 			</div>
// 		</div>
// 	);
// };

// export default AddTasks;
