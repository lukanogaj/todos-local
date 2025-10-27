import styles from './index.module.scss';
import arrowUp from '../images/arrow.png';
// import FetchTodos from '../hooks';

const UpcomingTasks = ({ upcomingTodos, handleRemoveTodo }) => {
	return (
		<div className={styles.upcomingTasks}>
			<div className={styles.upcomingTasksHeader}>
				<h1 className={styles.headerH1}>Upcoming Tasks</h1>
				<div className={styles.arrow}>
					<span className={styles.spanArrow}>See all</span>
					<img
						src={arrowUp}
						alt=''
					/>
				</div>
			</div>
			{/* Upcoming Todos items  */}
			<div className={styles.upcomingTasksContainer}>
				<ul>
					{upcomingTodos.map((todo, index) => (
						<div
							key={index}
							style={{
								display: 'flex',
								width: '100%',
								justifyContent: 'space-between',
								paddingBottom: '4px',
							}}>
							<li key={index}>{todo}</li>
							<button
								style={{
									padding: '4px 8px',
									backgroundColor: 'white',
									cursor: 'pointer',
								}}
								onClick={() => handleRemoveTodo(index)}>
								delete me
							</button>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default UpcomingTasks;
