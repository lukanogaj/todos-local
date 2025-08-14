import styles from './index.module.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
	return (
		<div className={styles.todo}>
			<p
				className={`${task.completed} ? ${styles.completed} : ${incompleted}`}
				onClick={() => toggleComplete(task.id)}>
				{task.task}
			</p>
			<div>
				<FontAwesomeIcon
					className={styles.editIcon}
					icon={faPenToSquare}
					onClick={() => editTodo(task.id)}
				/>
				<FontAwesomeIcon
					className={styles.deleteIcon}
					icon={faTrash}
					onClick={() => deleteTodo(task.id)}
				/>
			</div>
		</div>
	);
};
