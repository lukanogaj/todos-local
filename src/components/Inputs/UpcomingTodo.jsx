import UpcomingTodoItem from './UpcomingTodoItem';

const UpcomingTodo = ({ todos, deleteTodos }) => {
	// check if notes exist , was submitted
	if (notes.length === 0) {
		return <p>No Notes Yet</p>;
	}

	return (
		<div className='note-list'>
			{todos.map((todo) => (
				<UpcomingTodoItem
					key={todo.id}
					note={todo}
					deleteNote={deleteNote}
				/>
			))}
		</div>
	);
};

export default UpcomingTodo;
