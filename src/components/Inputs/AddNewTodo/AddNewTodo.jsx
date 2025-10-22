import styles from './index.module.scss';
import { useState, useEffect } from 'react';
// import AddNewTodoBtn from '../../buttons/addNewTodoBtn.jsx';
// import HideFormBtn from '../../buttons/hideFormBtn.jsx';

const AddNewTodo = ({ isFormVisible }) => {
	// Todo input to submit todo item into local storage
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	// const [isFormVisible, setIsFormVisible] = useState(false);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() !== '') {
			setTodos([...todos, inputValue]);
			setInputValue('');
			localStorage.setItem('todos', JSON.stringify([...todos, inputValue]));
		}
	};

	useEffect(() => {
		const storedTodos = localStorage.getItem('todos');
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	const clearLocale = () => {
		localStorage.clear();
	};

	return (
		<div className={styles.addNewTodoContainer}>
			<form
				onSubmit={handleSubmit}
				className={styles.todoForm}>
				<input
					type='text'
					className={styles.inputTodo}
					value={inputValue}
					onChange={handleInputChange}
					placeholder='Enter a new task'
				/>
				<button
					type='submit'
					className={styles.btnAddTodo}></button>
			</form>
		</div>
	);
};

export default AddNewTodo;
