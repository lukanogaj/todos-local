import { useState } from 'react';
import styles from './index.module.scss';
import AddNewTaskControl from '../Controls/AddNewTaskControl';
import HideForm from '../Controls/HideForm';
const AddNewTodoInput = ({ handleAddTodo }) => {
	const [input, setInput] = useState('');
	const [isFormVisible, setIsFormVisible] = useState(false);

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
							value={input}
							onChange={(e) => setInput(e.target.value)}
							// setAddedTodo={setAddedTodo}
						/>
						<button
							onClick={() => {
								handleAddTodo(input);
								setInput('');
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
