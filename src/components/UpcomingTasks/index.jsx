import { useState } from "react";
import { useEffect } from "react";
import styles from "./index.module.scss";

const UpcomingTasks = ({ todos, handleRemoveTodo }) => {
	return (
		<div className={styles.upcomingTasks}>
			<header className={styles.upcomingTasksHeader}>
				<h1>Upcoming Tasks</h1>
			</header>
			<div className={styles.tasksContainer}>
				<ul
					className="todoList"
					handleRemoveTodo={handleRemoveTodo}>
					{todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => handleRemoveTodo(index)}>Remove</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default UpcomingTasks;
