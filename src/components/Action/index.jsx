import styles from "./index.module.scss";
import data from "../data";

// Div that include 4 divs (Todays tasks list, todays task with information how many tasks has been done , add new task div, and greeting of support)
const Action = () => {
	return (
		<div className={styles.action}>
			{/* Today's tasks */}
			<div className={styles.taskTable}>
				<h2>Today's Tasks</h2>
				{data.tasks.map((todoItem) => (
					<div
						key={todoItem.id}
						className={styles.tasks}>
						<div className={styles.taskIcon}>
							<img
								src={todoItem.checkIcon}
								alt="box"
							/>
						</div>
						<div
							className={styles.taskText}
							key={todoItem.id}>
							{todoItem.task}
						</div>
					</div>
				))}
			</div>
			<div className={styles.taskCounter}></div>
			{/* Add new task and greeting  */}
			<div className={styles.addTasks}>
				<div className={styles.addTask}>
					{" "}
					<div>
						<h2>+</h2>
						<div>
							<h2>Add a new task</h2>
						</div>
					</div>
				</div>
				<div className={styles.greeting}></div>
			</div>
		</div>
	);
};

export default Action;
