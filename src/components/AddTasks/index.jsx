import styles from "./index.module.scss";
import youAreAwesome from "../images/youarewesome.png";
import AddNewTodoInput from "../Inputs/AddNewTodoInput";
const AddTasks = ({ handleAddTodo }) => {
  // State for make addTask input visible

  return (
    <div className={styles.addTasks}>
      <div className={styles.addTask}>
        <AddNewTodoInput handleAddTodo={handleAddTodo} />
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
