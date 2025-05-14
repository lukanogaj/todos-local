import { useState } from "react";
import styles from "./index.module.scss";

const ProgressBar = () => {
	const radius = 35;

	return (
		<div className={styles.wrapper}>
			<div className={styles.circularBar}>
				<div className={styles.percent}>25%</div>
			</div>
		</div>
	);
};

export default ProgressBar;
