import styles from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import AddNewTodo from '../Inputs/AddNewTodo/AddNewTodo';
import AddNewTodoBtn from '../buttons/addNewTodoBtn';
import HideFormBtn from '../buttons/hideFormBtn';
const AddTasks = () => {
	// State for make addTask input visible
	const [isFormVisible, setIsFormVisible] = useState(false);

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<div
					onClick={() => setIsFormVisible(!isFormVisible)}
					className={styles.addTaskBtn}>
					{/* <span>+</span>
					<h3>Add a New Task</h3> */}
					{!isFormVisible ? <AddNewTodoBtn /> : <HideFormBtn />}
					{isFormVisible && <AddNewTodo />}
				</div>
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
