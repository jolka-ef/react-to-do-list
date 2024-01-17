import styles from "../css/TaskName.module.css";
import { useState } from "react";
export const TaskName = ({ text }) => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <>
      <input
        className={styles.Checkbox}
        checked={checked}
        onChange={toggleCheckbox}
        type="checkbox"
      />
      <label className={styles.Text}>{text}</label>
    </>
  );
};
