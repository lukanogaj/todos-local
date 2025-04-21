import styles from "./index.module.scss";
import Header from "../Header";
import Action from "../Action";
import UpcomingTasks from "../UpcomingTasks";

const Content = () => {
	return (
		<div className={styles.content}>
			<Header />
			<Action />
			<UpcomingTasks />
		</div>
	);
};

export default Content;
