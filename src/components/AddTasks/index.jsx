import styles from "./index.module.scss";
import { useState } from "react";
import AddNewTaskControl from "../Controls/AddNewTaskControl";
import HideForm from "../Controls/HideForm";
import youAreAwesome from "../images/youarewesome.png";

const AddTasks = ({
	handleAddTodo,
	date,
	setDate,
	input,
	setInput,
	time,
	setTime,
	setTitle,
	title,
}) => {
	// State for make addTask input visible
	const [isFormVisible, setIsFormVisible] = useState(false);
	const clearLocale = () => localStorage.clear();
	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<>
					<div
						onClick={() => setIsFormVisible(!isFormVisible)}
						className={styles.toggleButton}>
						{isFormVisible ? <HideForm /> : <AddNewTaskControl />}
					</div>
					<div className={styles.todoInput}>
						{isFormVisible && (
							<div>
								<input
									type='text'
									placeholder='Add a new task'
									value={input}
									onChange={(e) => setTitle(e.target.value)}
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
								<button
									onClick={() => {
										handleAddTodo(title);
										setTitle("");
									}}>
									Submit
								</button>
								<button onClick={() => clearLocale()}>Clear</button>
							</div>
						)}
					</div>
				</>
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
