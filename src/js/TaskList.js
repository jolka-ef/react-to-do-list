import { TaskName } from "./TaskName";
import styles from "../css/TaskList.module.css";

import { Trash } from "../icons/Trash";
import { copyMap } from "../utils/copyMap";
export const TaskList = ({ taskList, setTaskList }) => {
  const deleteTaskFromList = (_, key) => {
    const TaskListCopy = copyMap(taskList);
    TaskListCopy.delete(key);
    setTaskList(TaskListCopy);
  };

  const createListItems = (map) => {
    const items = [];
    map.forEach((text, key) => {
      items.push(
        <li className={styles.Item} data-key={key} key={key}>
          <TaskName text={text} />
          <button
            className={styles["Item-button"]}
            onClick={(_) => deleteTaskFromList(_, key)}
          >
            <Trash />
          </button>
        </li>
      );
    });
    return items;
  };
  return (
    <main>
      <ul className={styles.List}>{createListItems(taskList)}</ul>
    </main>
  );
};
