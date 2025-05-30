import { useState } from "react";
import { useEffect } from "react";
import styles from "./index.module.scss";

const UpcomingTasks = () => {
	return (
		<div className={styles.upcomingTasks}>
			<header className={styles.upcomingTasksHeader}>
				<h1>Upcoming Tasks</h1>
			</header>
			<div className={styles.tasksContainer}></div>
		</div>
	);
};

export default UpcomingTasks;
