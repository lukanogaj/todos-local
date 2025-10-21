import styles from './index.module.scss';

const AddNewTodo = ({ task, setTask, todos, setTodos }) => {
	const handleAddTodo = () => {
		if (task.trim() !== '') {
			setTodos([...todos, task]);
			setTask('');
		}
	};
	return (
		<div className={styles.todoInput}>
			<input
				type='text'
				placeholder='Add a new task'
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add</button>
			{/* <button onClick={() => clearLocale(index)}>Remove</button> */}
		</div>
	);
};

export default AddNewTodo;
