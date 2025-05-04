import styles from "./index.module.scss";
import data from "../data";
import arrowUp from "../images/icons/arrow-up.svg";

// Div that include 4 divs (Todays tasks list, todays task with information how many tasks has been done , add new task div, and greeting of support)
const Action = () => {
	return (
		<div className={styles.action}>
			{/* Today's tasks */}
			<div className={styles.taskContainer}>
				<div className={styles.taskTable}>
					<div className={styles.taskHeading}>
						<h2>Today's Tasks</h2>
						<img
							src={arrowUp}
							alt=""
						/>
					</div>
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
				<div className={styles.taskCounter}>
					<div className={styles.taskCounterHeading}>
						<h2>Today's Tasks</h2>
						<p>1 out of 4 done</p>
					</div>
					<div className={styles.precentageCircle}>
						<svg
							width="250"
							height="250"
							viewBox="0 0 250 250">
							<circle
								class="bg"
								cx="125"
								cy="125"
								r="115"
								fill="none"
								stroke="#ddd"
								stroke-width="20"></circle>
							<circle
								class="fg"
								cx="125"
								cy="125"
								r="115"
								fill="none"
								stroke="#5394fd"
								stroke-width="20"></circle>
						</svg>
					</div>
				</div>
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
