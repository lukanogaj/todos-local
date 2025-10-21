import styles from './index.module.scss';
import { useState, useEffect } from 'react';

const AddNewTodo = () => {
	// Todo input to submit todo item into local storage
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() !== '') {
			setTodos([...todos, inputValue]);
			setInputValue('');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					placeholder='Enter a new task'
				/>
				<button type='submit'>Add Task</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

export default AddNewTodo;
