import styles from './index.module.scss';
import { useState, useRef, useEffect } from 'react';
import youAreAwesome from '../images/youarewesome.png';
import AddNewTodo from '../Inputs/AddNewTodo';

const AddTasks = () => {
	// State for make addTask input visible
	const [isFormVisible, setIsFormVisible] = useState(false);

	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				{/* Place for todo input */}

				<AddNewTodo />
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
