import styles from "./index.module.scss";
import Header from "../Header";
import Action from "../Action";

const Content = () => {
	return (
		<div className={styles.content}>
			<Header />
			<Action />
		</div>
	);
};

export default Content;
