import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Header from "../Header";
import Action from "../Action";
// import AddTasks from "../AddTasks";
import UpcomingTasks from "../UpcomingTasks";

const Content = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("");

	return (
		<div className={styles.content}>
			<Header />
			<Action />
			{/* <AddTasks /> */}
			<UpcomingTasks
				data={data}
				input={input}
			/>
		</div>
	);
};

export default Content;
