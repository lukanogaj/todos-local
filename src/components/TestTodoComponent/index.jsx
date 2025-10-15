import { useState, useEffect } from 'react';
import './TodoTest.css';

const TodoTestComponent = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');

	// // Update local storage whenever TODOs change
	// useEffect(() => {
	// 	localStorage.setItem('todos', JSON.stringify(todos));
	// }, [todos.length]);
	// Load TODOs from local storage on app startup
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, [todos.length]);

	const handleAddTodo = () => {
		if (task.trim() !== '') {
			setTodos([...todos, task]);
			setTask('');
		}
	};

	const handleRemoveTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>TODO App</h1>
				<div className='todo-input'>
					<input
						type='text'
						placeholder='Add a new task'
						value={task}
						onChange={(e) => setTask(e.target.value)}
						handleAddTodo={handleAddTodo}
					/>
					<button>Add</button>
				</div>
				<ul className='todo-list'>
					{todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => handleRemoveTodo(index)}>Remove</button>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
};

export default TodoTestComponent;
