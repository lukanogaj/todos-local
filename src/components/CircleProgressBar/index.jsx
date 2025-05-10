import { useState } from "react";
import styles from "./index.module.scss";

const CircleProgressBar = ({ precentage, circleWidth }) => {
	const radius = 85;
	return (
		<div className={styles.barContainer}>
			<svg
				width={circleWidth}
				height={circleWidth}
				viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
				<circle
					className={styles.circleBackground}
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth="15px"
					r={radius}
				/>
			</svg>
		</div>
	);
};

export default CircleProgressBar;
