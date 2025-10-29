import styles from "./index.module.scss";
import arrowUp from "../images/arrow.png";
import UpcomingTaskInput from "../Inputs/UpcomingTaskInput";
// import FetchTodos from '../hooks';

const UpcomingTasks = ({ upcomingTodos, handleRemoveTodo }) => {
	return (
		<div className={styles.upcomingTasks}>
			<div className={styles.upcomingTasksHeader}>
				<h1 className={styles.headerH1}>Upcoming Tasks</h1>
				<div className={styles.arrow}>
					<span className={styles.spanArrow}>See all</span>
					<img
						src={arrowUp}
						alt=''
					/>
				</div>
			</div>
			{/* Upcoming Todos items  */}
			<div className={styles.upcomingTasksContainer}>
				<UpcomingTaskInput
					upcomingTodos={upcomingTodos}
					handleRemoveTodo={handleRemoveTodo}
				/>
			</div>
		</div>
	);
};

export default UpcomingTasks;
