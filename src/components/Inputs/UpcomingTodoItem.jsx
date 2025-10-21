const UpcomingTodoItem = (todo, deleteTodo) => {
	return (
		<div className='todo-item'>
			<h3>{note.title}</h3>
			<p>
				<strong>Category:</strong> {note.category}
			</p>
			<p>
				<strong>Priority:</strong> {note.priority}
			</p>
			<p>{note.description}</p>
			<button
				onClick={() => deleteTodo(note.id)}
				className='btn-delete-notes'>
				🗑️ Delete Note
			</button>
		</div>
	);
};

export default UpcomingTodoItem;
