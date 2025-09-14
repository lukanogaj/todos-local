import { useState } from 'react';
import styles from './index.module.scss';

const AddTaskInput = ({ onChange, value, required = false }) => {
	return (
		<div className={styles.addTaskWrapper}>
			<input
				type='text'
				className={styles.inputAddTask}
				placeholder='Add Task'
				value={value}
				onChange={onChange}
				required={required}
			/>
			{/* <label>Add Task</label> */}
		</div>
	);
};

export default AddTaskInput;
