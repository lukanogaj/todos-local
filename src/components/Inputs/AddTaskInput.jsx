import styles from './index.module.scss';

const AddTaskInput = () => {
	return (
		<div className={styles.addTaskWrapper}>
			<input
				type='text'
				className={styles.inputAddTask}
				placeholder='Add Task'
				required=''
			/>
			{/* <label>Add Task</label> */}
		</div>
	);
};

export default AddTaskInput;
