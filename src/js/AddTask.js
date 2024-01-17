import { Button } from "./Button";
import { copyMap } from "../utils/copyMap";
import taskStyles from "../css/AddTask.module.css";
import buttonStyles from "../css/Button.module.css";

export const AddTask = ({ taskList, setTaskList }) => {
  const addToTheList = (event) => {
    event.preventDefault();
    const userText = event.target.userText.value.trim();
    const taskListCopy = copyMap(taskList);
    taskListCopy.set(new Date().getTime(), userText);
    setTaskList(taskListCopy);
    event.target.userText.value = "";
  };
  return (
    <form onSubmit={addToTheList}>
      <input
        className={taskStyles.Input}
        id="userText"
        name="userText"
        pattern=".*\S.*"
        placeholder="Write it down !"
        required
        type="text"
      ></input>
      <Button
        className={buttonStyles.Basic}
        text="Add new task"
        type="submit"
      />
    </form>
  );
};
