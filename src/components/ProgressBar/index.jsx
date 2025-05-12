import { useState } from "react";
import styles from "./index.module.scss";

const ProgressBar = ({ percentage, circleWidth }) => {
	const radius = 75;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * percentage) / 100;
	console.log(dashArray);
	console.log(percentage);
	console.log(dashOffset);
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
				<circle
					cx={circleWidth / 2}
					cy={circleWidth / 2}
					strokeWidth="15px"
					r={radius}
					className={styles.circleProgress}
					style={{
						// strokeDasharray: dashArray,
						strokeDashoffset: dashOffset,
						strokeDasharray: dashArray,
					}}
				/>
			</svg>
		</div>
	);
};

export default ProgressBar;
