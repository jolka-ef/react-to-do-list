import { AddTask } from "./AddTask";
import { Button } from "./Button";
import buttonStyles from "../css/Button.module.css";

export const Header = ({ taskList, setTaskList }) => {
  const clearTheList = (event) => {
    event.preventDefault();
    setTaskList(new Map());
  };
  return (
    <header>
      <Button
        className={`${buttonStyles.Basic} ${buttonStyles.ClearTheList}`}
        text="Clear the list"
        onClick={clearTheList}
      />
      <h1>Things to do</h1>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
    </header>
  );
};
