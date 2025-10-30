import styles from "./index.module.scss";
import CheckBox from "../Controls/Checkbox";
const UpcomingTaskInput = ({ handleRemoveTodo, upcomingTodos }) => {
	return (
		<div className={styles.upcomingTaskInputContainer}>
			<ul className={styles.list}>
				{upcomingTodos.map((todo, index) => (
					<div
						// key={todo.index}
						className={styles.listItem}>
						<CheckBox />
						<li key={index}>{todo}</li>
						<button onClick={() => handleRemoveTodo(index)}>delete me</button>
					</div>
				))}
			</ul>
		</div>
	);
};

export default UpcomingTaskInput;
