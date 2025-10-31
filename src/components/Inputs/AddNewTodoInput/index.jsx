import { useState } from "react";
import styles from "./index.module.scss";
import AddNewTaskControl from "../Controls/AddNewTaskControl";
import HideForm from "../Controls/HideForm";
const AddNewTodoInput = ({ handleAddTodoCopy, time, setTime }) => {
	const [title, setTitle] = useState("");
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [date, setDate] = useState("");

	const clearLocale = () => localStorage.clear();

	return (
		<>
			<div
				onClick={() => setIsFormVisible(!isFormVisible)}
				className='toggle-button'>
				{isFormVisible ? <HideForm /> : <AddNewTaskControl />}
			</div>
			<div className={styles.todoInput}>
				{isFormVisible && (
					<div>
						<input
							type='text'
							placeholder='Add a new task'
							value={title}
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
								handleAddTodoCopy(title);
								setTitle("");
							}}>
							Submit
						</button>
						<button onClick={() => clearLocale()}>Clear</button>
					</div>
				)}
			</div>
		</>
	);
};

export default AddNewTodoInput;
