import styles from "./index.module.scss";
import arrowUp from "../images/arrow.png";
// import UpcomingTaskInput from "../Inputs/UpcomingTaskInput";
// import FetchTodos from '../hooks';

const UpcomingTasks = ({ handleDelete, todos, sortedTodos }) => {
	// Sort todos by date and time
	// const sortedTodos = [...(todos || [])].sort((a, b) => {
	// 	const dtA = new Date(`${a.date}T${a.time}`);
	// 	const dtB = new Date(`${b.date}T${b.time}`);
	// 	return dtA - dtB;
	// });
	const clearLocale = () => {
		localStorage.clear();
	};
	// console.log(sortedTodos);
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
			{/* Upcoming todos  */}

			<ul>
				{sortedTodos.length === 0 && (
					<li style={{ color: "#fff" }}> No todos yet!</li>
				)}
				{sortedTodos.map((todo) => (
					<li
						key={todo.id}
						style={{
							marginBottom: "0.5rem",
							background: "#f1f1f1",
							padding: "0.5rem 1rem",
							borderRadius: "4px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<span>
							<b>{todo.title}</b> <br />
							<small>
								{todo.date} {todo.time}
							</small>
						</span>
						<button
							onClick={() => handleDelete(todo.id)}
							style={{ marginLeft: "1rem" }}>
							Delete
						</button>
						<button onClick={() => clearLocale()}>Clear</button>
					</li>
				))}
			</ul>
			<div className={styles.upcomingTasksContainer}></div>
		</div>
	);
};

export default UpcomingTasks;

/*
			{/* <UpcomingTaskInput
					upcomingTodos={upcomingTodos}
					handleRemoveTodo={handleRemoveTodo}
				/> */
