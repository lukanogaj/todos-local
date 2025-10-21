import styles from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import { v4 as uuidv4 } from 'uuid';
import AddNewTodo from '../Inputs/AddNewTodo';

const AddTasks = ({ todos, setTodos, task, setTask }) => {
	// State for make addTask input visible
	const [isFormVisible, setIsFormVisible] = useState(false);

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<span onClick={setTask}>{task ? <AddNewTodo /> : null}+</span>
				<button
					onClick={() => setIsFormVisible(!isFormVisible)}
					className={styles.btnAddTask}>
					{isFormVisible ? 'Hide Form ' : 'Add New Task '}
				</button>
				{isFormVisible && 'hello'}
			</div>
			<div className={styles.greeting}>
				<div className={styles.awesomeImg}>
					<img
						src={youAreAwesome}
						alt=''
					/>
				</div>

				<h2>
					You're Doing <br />
					<strong>Awesome!</strong>
				</h2>
			</div>
		</div>
	);
};

export default AddTasks;
