import styles from './index.module.scss';
import { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
	const [value, setValue] = useState('');

	// Function to submit value of the new Task

	const handleSubmit = (e) => {
		// prevent default action
		e.preventDefault();
		value ? addTodo(value) : setValue('');
	};
	return (
		<form
			onSubmit={handleSubmit}
			className={styles.ToDoForm}>
			<input
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className={styles.todoInput}
				placeholder='What is the task today?'
			/>
			<button
				type='submit'
				className={styles.todoBtn}>
				Add Task
			</button>
		</form>
	);
};

export default ToDoForm;
