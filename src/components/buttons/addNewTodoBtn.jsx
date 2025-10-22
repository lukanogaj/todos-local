import styles from './index.module.scss';

const AddNewTodoBtn = () => {
	return (
		<div className={styles.addNewTodoBtn}>
			<button>
				<span>+</span>
				<h2>Add a New Todo</h2>
			</button>
		</div>
	);
};

export default AddNewTodoBtn;
