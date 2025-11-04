import styles from "./index.module.scss";
import CheckBox from "../../Controls/Checkbox";
const UpcomingTaskInput = ({ sortedTodos, handleDelete }) => {
	return (
		<div className={styles.upcomingTaskInputContainer}>
			<ul style={{ padding: 0, listStyle: "none" }}>
				{sortedTodos.length === 0 && <li>No todos yet!</li>}
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
					</li>
				))}
			</ul>
			{/* <ul className={styles.list}>
				{upcomingTodos.map((todo, index) => (
					<div
						key={todo.index}
						className={styles.listItem}>
						<CheckBox />
						<li key={todo.id}>{todo}</li>
						<span>
							<b>{todo.title}</b> <br />
							<small>
								{todo.date} {todo.time}
							</small>
						</span>
						<button onClick={() => handleRemoveTodo(index)}>delete me</button>
					</div>
				))}
			</ul> */}
		</div>
	);
};

export default UpcomingTaskInput;
