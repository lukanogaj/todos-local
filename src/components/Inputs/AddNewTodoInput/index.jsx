import { useState } from 'react';
import styles from './index.module.scss';
import AddNewTaskControl from '../Controls/AddNewTaskControl';
import HideForm from '../Controls/HideForm';
const AddNewTodoInput = ({ task, setTask, handleAddTodo, setAddedTodo }) => {
	const [isFormVisible, setIsFormVisible] = useState(false);

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
							value={task}
							onChange={(e) => setTask(e.target.value)}
							setAddedTodo={setAddedTodo}
						/>
						<button onClick={() => handleAddTodo()}>Submit</button>
					</div>
				)}
			</div>
		</>
	);
};

export default AddNewTodoInput;
