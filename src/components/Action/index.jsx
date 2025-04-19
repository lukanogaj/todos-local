import styles from "./index.module.scss";

const Action = () => {
	return (
		<div className={styles.action}>
			{/* Today's tasks */}
			<div className={styles.tasks}>
				<div className={styles.todayTask}></div>
				<div className={styles.taskCounter}></div>
			</div>
			{/* Add new task and greeting  */}
			<div className={styles.addTasks}>
				<div className={styles.addTask}></div>
				<div className={styles.greeting}></div>
			</div>
		</div>
	);
};

export default Action;
