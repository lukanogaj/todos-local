import styles from "./index.module.scss";
import { useState, useRef, useEffect } from "react";
import youAreAwesome from "../images/youarewesome.png";
import AddNewTodoInput from "../Inputs/AddNewTodoInput";
const AddTasks = ({
  handleAddTodo,
  handleRemoveTodo,
  setTodos,
  setTask,
  todos,
  task,
}) => {
  // State for make addTask input visible
  const [addedTodo, setAddedTodo] = useState(false);

  return (
    <div className={styles.addTasks}>
      <div className={styles.addTask}>
        <AddNewTodoInput
          task={task}
          setTask={setTask}
          handleAddTodo={handleAddTodo}
          todos={todos}
          addedTodo={addedTodo}
          setAddedTodo={setAddedTodo}
        />

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.greeting}>
        <div className={styles.awesomeImg}>
          <img src={youAreAwesome} alt="" />
        </div>

        <h2>
          You're Doing <br />
          <strong>Awesome!</strong>
        </h2>
      </div>
    </div>
  );
};

export default AddTasks;
