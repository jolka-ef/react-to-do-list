import { useState } from "react";
import { Header } from "./js/Header";
import { TaskList } from "./js/TaskList";
function App() {
  const [taskList, setTaskList] = useState(new Map());
  return (
    <>
      <Header taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </>
  );
}

export default App;
