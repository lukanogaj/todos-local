import { useState } from "react";
import styles from "./index.module.scss";

const BarPercentage = () => {
	const [percentage, setPercentage] = useState(25);
	return (
		<div className={styles.barContainer}>
			<input
				type="range"
				min="1"
				max="100"
				step="1"
				value={percentage}
				onChange={(ev) => setPercentage(ev.target.value)}
				percentage={percentage}
			/>
		</div>
	);
};

export default BarPercentage;
