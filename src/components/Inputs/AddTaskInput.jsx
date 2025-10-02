import { useState } from 'react';
import styles from './index.module.scss';

const AddTaskInput = ({ setTask, task, required = false }) => {
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
			{/* <label>Add Task</label> */}
		</div>
	);
};

export default AddTaskInput;
