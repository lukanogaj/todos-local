import styles from "./index.module.scss";
import youAreAwesome from "../images/download (1).jpeg";

const AddTasks = () => {
	return (
		<div className={styles.addTasks}>
			<div className={styles.addTask}>
				<h2>+</h2>
				<div>
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

				<h3>You're doing awesome</h3>
			</div>
		</div>
	);
};

export default AddTasks;
