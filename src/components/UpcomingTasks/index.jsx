import { useState, useEffect } from "react";
// import { useEffect } from "react";
import styles from "./index.module.scss";

const UpcomingTasks = () => {
	return (
		<div className={styles.upcomingTasks}>
			<div className={styles.upcomingTasksHeader}>
				<h1 className={styles.headerH1}>Upcoming Tasks</h1>
				<span>See all</span>
			</div>
			<div className={styles.tasksContainer}>
				{/* <ul
					className="todoList"
					// handleRemoveTodo={handleRemoveTodo}
				>
					{data.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => deleteTodo(index)}>Remove</button>
						</li>
					))}
				</ul> */}
			</div>
		</div>
	);
};

export default UpcomingTasks;
