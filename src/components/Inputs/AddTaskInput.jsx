import { useState } from 'react';
import styles from './index.module.scss';

const AddTaskInput = ({ setTask, task, handleAddTodo, required = false }) => {
	return (
		<div className={styles.addTaskWrapper}>
			<input
				type='text'
				className={styles.inputAddTask}
				placeholder='Add Task'
				value={task}
				onChange={(e) => setTask(e.target.value)}
				required={required}
			/>
			<div className={styles.addTaskBtn}>
				<button
					onClick={handleAddTodo}
					className={styles.btnAddToDo}>
					Add Task
				</button>
			</div>
		</div>
	);
};

export default AddTaskInput;
