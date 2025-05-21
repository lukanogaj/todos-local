import styles from "./index.module.scss";

const ProgressBar = () => {
	// const [percentage, setPercentage] = useState(0);

	return (
		<div className={styles.progressBar}>
			<div className={styles.circularProgress}>
				{/* <div className={styles.progressValue}></div> */}
			</div>
		</div>
	);
};

export default ProgressBar;
