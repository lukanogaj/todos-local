import styles from "./index.module.scss";
import youAreAwesome from "../images/youawesome.png";

const AddTasks = () => {
	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<h1>+</h1>
				<div className={styles.taskHead}>
					<h2>Add a new task</h2>
				</div>
			</div>
			<div className={styles.greeting}>
				<div className={styles.awesomeImg}>
					<img
						src={youAreAwesome}
						alt=""
					/>
				</div>

				<h2>
					You're Doing <br />
					<strong>Awesome!</strong>
				</h2>
			</div>
		</div>
	);
};

export default AddTasks;
