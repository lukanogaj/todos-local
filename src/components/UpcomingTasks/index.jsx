import { useState, useEffect } from "react";
// import { useEffect } from "react";
import styles from "./index.module.scss";
import arrowUp from "../images/arrow.png";

const UpcomingTasks = () => {
	return (
		<div className={styles.upcomingTasks}>
			<div className={styles.upcomingTasksHeader}>
				<h1 className={styles.headerH1}>Upcoming Tasks</h1>
				<div className={styles.arrow}>
					<span className={styles.spanArrow}>See all</span>
					<img
						src={arrowUp}
						alt=""
					/>
				</div>
			</div>
			<div className={styles.tasksContainer}></div>
		</div>
	);
};

export default UpcomingTasks;
