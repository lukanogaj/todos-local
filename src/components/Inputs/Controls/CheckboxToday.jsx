import styles from "./index.module.scss";

const CheckBoxToday = () => {
	return (
		<div className={styles.checkboxWrapper}>
			<label>
				<input type='checkbox' />
				<span className={styles.checkboxToday}></span>
			</label>
		</div>
	);
};

export default CheckBoxToday;
