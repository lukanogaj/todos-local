import styles from './index.module.scss';

const TodayTaskInput = () => {
	return (
		<div className={styles.checkboxWrapper}>
			<label>
				<input type='checkbox' />
				<span className={styles.checkbox}></span>
			</label>
		</div>
	);
};

export default TodayTaskInput;
