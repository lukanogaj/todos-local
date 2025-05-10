import React from "react";
// import ReviewsProvider from "./ReviewsProvider";
import styles from "./index.module.scss";

const ReviewsBar = (props) => {
	return (
		<div className={styles.barContainer}>
			<input
				type="range"
				min="1"
				max="100"
				step="1"
			/>
		</div>
	);
};

export default ReviewsBar;
