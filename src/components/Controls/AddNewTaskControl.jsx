import styles from './index.module.scss';
const AddNewTaskControl = () => {
	return (
		<div className={styles.addNewTodoBtn}>
			<span>+</span>
			<span>Add new Task</span>
		</div>
	);
};

export default AddNewTaskControl;
